import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import useGetAccounts from 'src/utils/hooks/query/useGetAccounts';
import useGetPaginatedUsers, { IUser } from 'src/utils/hooks/query/useGetPaginatedUsers';
import useGetUserSetting from 'src/utils/hooks/query/useGetUserSetting';
import useGetAccessToken from 'src/utils/hooks/useGetAccessToken';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ITableData extends IUser {
  allow_marketing_push: boolean;
  is_active: boolean;
  account_count: number;
}

const UserListTable = () => {
  const router = useRouter();
  const query = router.query;
  const [pageState, setPageState] = useState<number>(query.page ? Number(query.page) : 1);
  const accessToken = useGetAccessToken();

  const { data: paginatedUsers, isPreviousData } = useGetPaginatedUsers(pageState, accessToken);
  const { data: userSetting } = useGetUserSetting(accessToken);
  const { data: accounts } = useGetAccounts(accessToken);

  const [tableData, setTableData] = useState<ITableData[]>([]);

  useEffect(() => {
    if (paginatedUsers && userSetting && accounts) {
      const reduced = paginatedUsers.data.reduce((arr, cur) => {
        const mySetting = userSetting.data.find((setting) => setting.uuid === cur.uuid);
        const myAccounts = accounts.data.filter((account) => account.uuid === cur.uuid);

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

      setTableData(reduced);
    }
  }, [paginatedUsers, userSetting, accounts]);

  return (
    <article className="flex flex-col gap-4">
      <section className="border border-gray-300 min-h-[353.86px]">
        <header className="grid grid-cols-10 items-center text-xs  font-medium bg-gray-50 border-b-[1px]">
          <h1 className="table-cell_exist_border">고객명</h1>
          <h1 className="table-cell_exist_border">보유중인 계좌수</h1>
          <h1 className="table-cell_exist_border">이메일 주소</h1>
          <h1 className="table-cell_exist_border">주민등록상 성별 코드</h1>
          <h1 className="table-cell_exist_border">생년월일</h1>
          <h1 className="table-cell_exist_border">휴대폰 번호</h1>
          <h1 className="table-cell_exist_border">최근 로그인</h1>
          <h1 className="table-cell_exist_border">혜택 수신 동의 여부</h1>
          <h1 className="table-cell_exist_border">활성화 여부</h1>
          <h1 className="table-cell_none_border">가입일</h1>
        </header>
        <section className="grid grid-cols-10 text-xs bg-white">
          {tableData.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <div className="p-2">
                  <Link
                    href={{
                      pathname: `/users/${data.id}`,
                      query: {
                        allow_marketing_push: data.allow_marketing_push,
                        is_active: data.is_active,
                      },
                    }}
                  >
                    {data.name}
                  </Link>
                </div>
                <div className="table-main-cell_p">{data.account_count}</div>
                <div className="table-main-cell_p">{data.email}</div>
                <div className="table-main-cell_p">{data.gender_origin}</div>
                <div className="table-main-cell_p">{data.birth_date}</div>
                <div className="table-main-cell_p">{data.phone_number}</div>
                <div className="table-main-cell_p">{data.last_login}</div>
                <div className="table-main-cell_p">{data.allow_marketing_push}</div>
                <div className="table-main-cell_p">{data.is_active}</div>
                <div className="table-main-cell_p">{data.created_at}</div>
              </React.Fragment>
            );
          })}
        </section>
      </section>
      <div className="flex gap-4 justify-center">
        <Link
          href={{
            pathname: router.pathname,
            query: {
              ...query,
              page: Math.max(pageState - 1, 0),
            },
          }}
          className={`text-sm ${pageState === 1 && 'disabled:opacity-30'}`}
          onClick={() => setPageState((prev) => Math.max(prev - 1, 0))}
          passHref
          shallow
          replace
        >
          {`<`}
        </Link>
        <span className="text-sm">{pageState}</span>
        <Link
          href={{
            pathname: router.pathname,
            query: {
              ...query,
              page: pageState + 1,
            },
          }}
          className={`text-sm ${(isPreviousData || !paginatedUsers?.hasNextPage) && 'disabled:opacity-30'}`}
          onClick={() => setPageState((prev) => prev + 1)}
          passHref
          shallow
          replace
        >
          {`>`}
        </Link>
      </div>
    </article>
  );
};

export default UserListTable;
