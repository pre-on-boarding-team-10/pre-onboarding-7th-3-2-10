import React, { useState } from 'react';
import MainHeader from 'src/components/common/MainHeader';
import SideNav from 'src/components/common/SideNav';
import UserListTable from 'src/components/table/UserList.table';
import { AdminContentLayout, AdminMainLayout, AdminRootLayout } from 'src/components/layout/Admin.layout';
import UserForm from 'src/components/Form/User.form';
import { useRouter } from 'next/router';

const UserList = () => {
  const router = useRouter();
  const query = router.query;
  const [currentPage, setCurrentPage] = useState<number>(query.page ? Number(query.page) : 1);

  const props = {
    userListTable: {
      currentPage,
      setCurrentPage,
    },
    userForm: {
      currentPage,
    },
  };
  return (
    <AdminRootLayout>
      <SideNav />
      <AdminMainLayout>
        <MainHeader />
        <AdminContentLayout>
          {/* // 사용자 추가 양식 */}
          <UserForm {...props.userForm} />
          <UserListTable {...props.userListTable} />
        </AdminContentLayout>
      </AdminMainLayout>
    </AdminRootLayout>
  );
};

export default UserList;
