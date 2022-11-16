import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import useGetAccounts from 'src/utils/hooks/query/useGetAccounts';
import useGetUsers, { IUser } from 'src/utils/hooks/query/useGetUsers';
import useGetUserSetting from 'src/utils/hooks/query/useGetUserSetting';

interface ITableData extends IUser {
  allow_marketing_push: boolean;
  is_active: boolean;
  account_count: number;
}

const UserListTable = () => {
  const { data: users } = useGetUsers();
  const { data: userSetting } = useGetUserSetting();
  const { data: accounts } = useGetAccounts();

  const [tableData, setTableData] = useState<ITableData[]>([]);

  useEffect(() => {
    if (users && userSetting && accounts) {
      const reduced = users.reduce((arr, cur) => {
        const mySetting = userSetting.find((setting) => setting.uuid === cur.uuid);
        const myAccounts = accounts.filter((account) => account.uuid === cur.uuid);

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
  }, [users, userSetting, accounts]);

  return (
    <section className="border border-gray-300">
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
  );
};

export default UserListTable;
