import React from 'react';
import { useRouter } from 'next/router';

import MainHeader from 'src/components/common/MainHeader';
import SideNav from 'src/components/common/SideNav';
import { AdminContentLayout, AdminMainLayout, AdminRootLayout } from 'src/components/layout/Admin.layout';
import useGetUser from 'src/utils/hooks/query/useGetUser';
import useGetAccessToken from 'src/utils/hooks/useGetAccessToken';
import EditUserForm from 'src/components/Form/EditUser.form';
import useGetAccounts from 'src/utils/hooks/query/useGetAccounts';
import UserInfoTable from 'src/components/table/UserInfo.table';
import UserHoldingAccountTable from 'src/components/table/UserHoldingAccount.table';

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

  return (
    <AdminRootLayout>
      <SideNav />
      <AdminMainLayout>
        <MainHeader />
        <AdminContentLayout>
          {isEditting ? (
            <React.Fragment>
              <h1 className="title-main">{`${user.name} 정보 수정`}</h1>
              <EditUserForm id={id} currentPage={currentPage} user={user} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h1 className="title-main">{`${user.name} 정보`}</h1>
              <UserInfoTable user={user} />
              <h1 className="title-main">{user.name} 보유 계좌목록</h1>
              <UserHoldingAccountTable accounts={accounts} />
            </React.Fragment>
          )}
        </AdminContentLayout>
      </AdminMainLayout>
    </AdminRootLayout>
  );
};

export default UserDetailView;
