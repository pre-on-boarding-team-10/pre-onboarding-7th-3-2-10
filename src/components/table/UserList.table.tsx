import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import useGetAccounts from 'src/utils/hooks/query/useGetAccounts';
import useGetUsers, { IUser } from 'src/utils/hooks/query/useGetPaginatedUsers';
import useGetUserSetting from 'src/utils/hooks/query/useGetUserSetting';
import useGetAccessToken from 'src/utils/hooks/useGetAccessToken';

interface ITableData extends IUser {
  allow_marketing_push: boolean;
  is_active: boolean;
  account_count: number;
}

const UserListTable = () => {
  const [pageState, setPageState] = useState<number>(1);
  const accessToken = useGetAccessToken();

  const { data: paginatedUsers, isPreviousData } = useGetUsers(pageState, accessToken);
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
          allow_marketing_push: mySetting?.allow_marketing_push ? '동의' : '비동의',
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
        <header className="grid grid-cols-10 text-xs font-bold">
          <h1>고객명</h1>
          <h1>보유중인 계좌수</h1>
          <h1>이메일 주소</h1>
          <h1>주민등록상 성별 코드</h1>
          <h1>생년월일</h1>
          <h1>휴대폰 번호</h1>
          <h1>최근 로그인</h1>
          <h1>혜택 수신 동의 여부</h1>
          <h1>활성화 여부</h1>
          <h1>가입일</h1>
        </header>
        <section className="grid grid-cols-10 text-xs">
          {tableData.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <div>{data.name}</div>
                <div>{data.account_count}</div>
                <div>{data.email}</div>
                <div>{data.gender_origin}</div>
                <div>{data.birth_date}</div>
                <div>{data.phone_number}</div>
                <div>{data.last_login}</div>
                <div>{data.allow_marketing_push}</div>
                <div>{data.is_active}</div>
                <div>{data.created_at}</div>
              </React.Fragment>
            );
          })}
        </section>
      </section>
      <div className="flex gap-4 justify-center">
        <button className="text-sm disabled:opacity-30" onClick={() => setPageState((prev) => Math.max(prev - 1, 0))} disabled={pageState === 1}>
          {`<`}
        </button>
        <span className="text-sm">{pageState}</span>
        <button
          className="text-sm disabled:opacity-30"
          onClick={() => setPageState((prev) => prev + 1)}
          disabled={isPreviousData || !paginatedUsers?.hasNextPage}
        >
          {`>`}
        </button>
      </div>
    </article>
  );
};

export default UserListTable;
