import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Link from 'next/link';

import useGetAccounts from 'src/utils/hooks/query/useGetAccounts';
import useGetPaginatedUsers from 'src/utils/hooks/query/useGetPaginatedUsers';
import useGetUserSetting from 'src/utils/hooks/query/useGetUserSetting';
import useGetAccessToken from 'src/utils/hooks/useGetAccessToken';
import { IAccount, ISearchValueState, IUser, IUserSetting } from 'src/types/global.type';
import useDeleteUser from 'src/utils/hooks/query/useDeleteUser';
import PaginationBar from '../Bar/Pagination.bar';
import SearchFilterBar from '../Bar/SearchFilter.bar';
import ThemeOfDarkTableTemplate from './ThemeOfDark.template';

interface ITableData extends IUser {
  allow_marketing_push: boolean;
  is_active: boolean;
  account_count: number;
}

interface IUserListTableProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const UserListTable = (props: IUserListTableProps) => {
  const { currentPage, setCurrentPage } = props;

  const router = useRouter();
  const query = router.query;
  const initialSearchValue = typeof query.q === 'string' ? query.q : '';

  const [searchValue, setSearchValue] = useState<ISearchValueState>({
    changed: initialSearchValue,
    submitted: initialSearchValue,
  });

  const accessToken = useGetAccessToken();
  const { data: paginatedUsers, isPreviousData } = useGetPaginatedUsers(currentPage, accessToken, searchValue.submitted);
  const { data: userSetting } = useGetUserSetting(accessToken);
  const { data: accounts } = useGetAccounts(accessToken);

  const { mutate: deleteUser } = useDeleteUser(accessToken, currentPage);

  if (!paginatedUsers || !userSetting || !accounts) return <></>;

  return (
    <section className="flex flex-col gap-4">
      <div className="overflow-x-auto relative">
        <SearchFilterBar searchValue={searchValue} setSearchValue={setSearchValue} setCurrentPage={setCurrentPage} />
        <ThemeOfDarkTableTemplate
          renderTableHeader={<TableHeader />}
          renderTableBody={<TableBody paginatedUsers={paginatedUsers} userSetting={userSetting} accounts={accounts} deleteUser={deleteUser} />}
        />
      </div>
      <PaginationBar currentPage={currentPage} setCurrentPage={setCurrentPage} isPreviousData={isPreviousData} />
    </section>
  );
};

export default UserListTable;

// Components
const TableHeader = () => {
  return (
    <tr>
      <th scope="col" className="p-2">
        고객명
      </th>
      <th scope="col" className="p-2 w-14">
        계좌수
      </th>
      <th scope="col" className="p-2">
        이메일
      </th>
      <th scope="col" className="p-2 w-20">
        성별 코드
      </th>
      <th scope="col" className="p-2">
        생년월일
      </th>
      <th scope="col" className="p-2 w-20">
        휴대폰 번호
      </th>
      <th scope="col" className="p-2">
        최근 로그인
      </th>
      <th scope="col" className="p-2 w-20">
        수신 동의
      </th>
      <th scope="col" className="p-2 w-24">
        활성화 여부
      </th>
      <th scope="col" className="p-2">
        가입일
      </th>
      <th scope="col" className="p-2 w-12">
        수정
      </th>
      <th scope="col" className="p-2 w-12">
        삭제
      </th>
    </tr>
  );
};

interface ITableBodyProps {
  paginatedUsers: IUser[];
  userSetting: IUserSetting[];
  accounts: IAccount[];
  deleteUser: any;
}

const TableBody = (props: ITableBodyProps) => {
  const { paginatedUsers, userSetting, accounts, deleteUser } = props;

  const router = useRouter();
  const [tableRowsData, setTableRowsData] = useState<ITableData[]>([]);

  useEffect(() => {
    if (paginatedUsers && userSetting && accounts) {
      const reduced = paginatedUsers.reduce((arr, cur) => {
        const mySetting = userSetting.find((setting) => setting.uuid === cur.uuid);
        const myAccounts = accounts.filter((account) => account.uuid === cur.uuid);

        arr.push({
          ...cur,
          allow_marketing_push: mySetting?.allow_marketing_push ? 'O' : 'X',
          is_active: mySetting?.is_active ? '활성' : '비활성',
          account_count: myAccounts.length,
          birth_date: cur.birth_date && format(new Date(cur.birth_date), 'yyyy-MM-dd'),
          created_at: cur.created_at && format(new Date(cur.created_at), 'yyyy-MM-dd'),
        });
        return arr;
      }, [] as any[]);

      setTableRowsData(reduced);
    }
  }, [paginatedUsers, userSetting, accounts]);

  return (
    <React.Fragment>
      {tableRowsData.map((row, rowIdx) => (
        <tr key={`${row.id}-${rowIdx}`} className="dark_table_tr">
          <th scope="row" className="dark_table_narrow_th">
            <Link href={{ pathname: `/users/${row.id}`, query: { allow_marketing_push: row.allow_marketing_push, is_active: row.is_active } }}>{row.name}</Link>
          </th>
          <td className="py-2 px-4">{row.account_count}</td>
          <td className="py-2 px-4">{row.email}</td>
          <td className="py-2 px-4">{row.gender_origin}</td>
          <td className="py-2 px-4">{row.birth_date}</td>
          <td className="py-2 px-4">{row.phone_number}</td>
          <td className="py-2 px-4">{row.last_login}</td>
          <td className="py-2 px-4">{row.allow_marketing_push}</td>
          <td className="py-2 px-4">{row.is_active}</td>
          <td className="py-2 px-4">{row.created_at}</td>
          <td className="w-12">
            <Link
              href={{ pathname: `/users/${row.id}`, query: { ...router.query, editting: true } }}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </Link>
          </td>
          <td className="w-12">
            <Link
              href={{ pathname: router.pathname, query: { ...router.query } }}
              className="font-medium text-red-500 dark:text-red-500 hover:underline"
              passHref
              shallow
              replace
              onClick={() => deleteUser(row.id)}
            >
              Delete
            </Link>
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};
