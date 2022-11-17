import React from 'react';
import { useRouter } from 'next/router';

import MainHeader from 'src/components/common/MainHeader';
import SideNav from 'src/components/common/SideNav';
import { AdminContentLayout, AdminMainLayout, AdminRootLayout } from 'src/components/layout/Admin.layout';
import useGetUser from 'src/utils/hooks/query/useGetUser';
import useGetAccessToken from 'src/utils/hooks/useGetAccessToken';
import EditUserForm from 'src/components/Form/EditUser.form';
import ThemeOfDarkTableTemplate from 'src/components/table/ThemeOfDark.template';
import { IAccount, IUser } from 'src/types/global.type';
import useGetAccounts from 'src/utils/hooks/query/useGetAccounts';
import { format } from 'date-fns';

const UserDetailView = () => {
  const router = useRouter();
  const { query } = router;

  const id = query.id ? Number(query.id) : 0;
  const currentPage = query.page ? Number(query.page) : 1;
  const isEditting = !!query?.editting;

  const accessToken = useGetAccessToken();
  const { data: user } = useGetUser(accessToken, router.query.id as string);
  const { data: accounts } = useGetAccounts(accessToken, id);

  if (!user || !accounts) return <></>;

  const props = {
    editUserForm: {
      id,
      currentPage,
      user,
    },
  };

  return (
    <AdminRootLayout>
      <SideNav />
      <AdminMainLayout>
        <MainHeader />
        <AdminContentLayout>
          <h1 className="title-main">{isEditting ? `${user.name} 정보 수정` : `${user.name} 정보`}</h1>
          {isEditting ? (
            <EditUserForm {...props.editUserForm} />
          ) : (
            <React.Fragment>
              <ThemeOfDarkTableTemplate renderTableBody={<UserInfoTableBody user={user} />} />
              <h1 className="title-main">{user.name} 보유 계좌목록</h1>
              <ThemeOfDarkTableTemplate renderTableHeader={<UserAccountsTableHeader />} renderTableBody={<UserAccountsTableBody accounts={accounts} />} />
            </React.Fragment>
          )}
        </AdminContentLayout>
      </AdminMainLayout>
    </AdminRootLayout>
  );
};

export default UserDetailView;

interface IUserDetailTableBodyProps {
  user: IUser;
}

const UserInfoTableBody = (props: IUserDetailTableBodyProps) => {
  const { user } = props;
  const router = useRouter();
  const query = router.query;

  return (
    <React.Fragment>
      <tr className="dark_table_tr">
        <th className="dark_table_wide_th">이름</th>
        <td className="p-4">{user.name}</td>
        <th className="dark_table_wide_th">성별</th>
        <td className="p-4">{user.gender_origin}</td>
        <th className="dark_table_wide_th">생년월일</th>
        <td className="p-4">{user.birth_date}</td>
      </tr>
      <tr className="dark_table_tr">
        <th className="dark_table_wide_th">주소</th>
        <td className="p-4">{user.address}</td>
        <th className="dark_table_wide_th">상세 주소</th>
        <td className="p-4">{user.detail_address}</td>
        <th className="dark_table_wide_th">이메일</th>
        <td className="p-4">{user.email}</td>
      </tr>
      <tr className="dark_table_tr">
        <th className="dark_table_wide_th">핸드폰</th>
        <td className="p-4">{user.phone_number}</td>
        <th className="dark_table_wide_th">연령</th>
        <td className="p-4">{user.age}</td>
        <th className="dark_table_wide_th">가입일</th>
        <td className="p-4">{user.created_at}</td>
      </tr>
      <tr className="dark_table_tr">
        <th className="dark_table_wide_th">최근 로그인</th>
        <td className="p-4">{user.last_login}</td>
        <th className="dark_table_wide_th">혜택 정보 수신</th>
        <td className="p-4">{query?.allow_marketing_push}</td>
        <th className="dark_table_wide_th">활성화 여부</th>
        <td className="p-4">{query?.is_active}</td>
      </tr>
    </React.Fragment>
  );
};

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

interface IUserAccountsTableBodyProps {
  accounts: IAccount[];
}

const UserAccountsTableBody = (props: IUserAccountsTableBodyProps) => {
  const { accounts } = props;
  return (
    <React.Fragment>
      {accounts.map((account, accountIdx) => {
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
