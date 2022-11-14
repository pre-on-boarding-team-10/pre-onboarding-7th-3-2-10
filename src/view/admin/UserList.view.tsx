import React from 'react';
import MainHeader from 'src/components/common/MainHeader';
import SideNav from 'src/components/common/SideNav';
import UserListTable from 'src/components/table/UserList.table';
import { AdminContentLayout, AdminMainLayout, AdminRootLayout } from 'src/components/layout/Admin.layout';

const UserList = () => {
  return (
    <AdminRootLayout>
      <SideNav />
      <AdminMainLayout>
        <MainHeader />
        <AdminContentLayout>
          <UserListTable />
        </AdminContentLayout>
      </AdminMainLayout>
    </AdminRootLayout>
  );
};

export default UserList;
