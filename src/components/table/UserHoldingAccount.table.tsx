import React from 'react';
import { format } from 'date-fns';
import { IAccount } from 'src/types/global.type';
import ThemeOfDarkTableTemplate from './ThemeOfDark.template';

interface IUserHoldingAccountTableProps {
  accounts: IAccount[];
}

const UserHoldingAccountTable = (props: IUserHoldingAccountTableProps) => {
  const { accounts } = props;

  return <ThemeOfDarkTableTemplate renderTableHeader={<UserAccountsTableHeader />} renderTableBody={<UserAccountsTableBody accounts={accounts} />} />;
};

export default UserHoldingAccountTable;

const UserAccountsTableHeader = () => {
  return (
    <tr>
      <th className="dark_table_narrow_th">계좌명</th>
      <th className="dark_table_narrow_th">계좌번호</th>
      <th className="dark_table_narrow_th">계좌상태</th>
      <th className="dark_table_narrow_th">브로커명</th>
      <th className="dark_table_narrow_th">평가금액</th>
      <th className="dark_table_narrow_th">입금금액</th>
      <th className="dark_table_narrow_th">수익률</th>
      <th className="dark_table_narrow_th">계좌활성화여부</th>
      <th className="dark_table_narrow_th">계좌개설일</th>
    </tr>
  );
};

const UserAccountsTableBody = (props: IUserHoldingAccountTableProps) => {
  const { accounts } = props;
  return (
    <React.Fragment>
      {accounts.map((account) => {
        const rateOfReturn = ((Number(account.assets) - Number(account.payments)) / Number(account.payments)) * 100;
        return (
          <tr className="dark_table_tr" key={account.id}>
            <td className="p-2">{account.name}</td>
            <td className="p-2">{account.number}</td>
            <td className="p-2">{account.status}</td>
            <td className="p-2">{account.broker_id}</td>
            <td className="p-2">{account.assets}</td>
            <td className="p-2">{account.payments}</td>
            <td className="p-2">{rateOfReturn.toFixed(0)}%</td>
            <td className="p-2">{account.is_active ? 'O' : 'X'}</td>
            <td className="p-2">{format(new Date(account.created_at), 'yyyy-MM-dd')}</td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};
