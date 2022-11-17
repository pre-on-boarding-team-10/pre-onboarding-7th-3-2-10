import { useRouter } from 'next/router';
import React from 'react';
import MainHeader from 'src/components/common/MainHeader';
import SideNav from 'src/components/common/SideNav';
import { AdminContentLayout, AdminMainLayout, AdminRootLayout } from 'src/components/layout/Admin.layout';
import useGetUser from 'src/utils/hooks/query/useGetUser';
import useGetAccessToken from 'src/utils/hooks/useGetAccessToken';

const UserDetailView = () => {
  const router = useRouter();
  const accessToken = useGetAccessToken();
  const { data: user } = useGetUser(accessToken, router.query.id as string);
  console.log('data', user);
  return (
    <AdminRootLayout>
      <SideNav />
      <AdminMainLayout>
        <MainHeader />
        <AdminContentLayout>
          <h1>사용자 정보</h1>
          <section>
            <h1>이름</h1>
            <div>{user?.name}</div>
            <h1>성별</h1>
            <div>{user?.gender_origin}</div>
            <h1>생년월일</h1>
            <div>{user?.birth_date}</div>
            <h1>주소</h1>
            <div>{user?.address}</div>
            <h1>상세 주소</h1>
            <div>{user?.detail_address}</div>
            <h1>이메일</h1>
            <div>{user?.email}</div>
            <h1>핸드폰</h1>
            <div>{user?.phone_number}</div>
            <h1>연령</h1>
            <div>{user?.age}</div>
            <h1>가입일</h1>
            <div>{user?.created_at}</div>
            <h1>최근 로그인</h1>
            <div>{user?.last_login}</div>
          </section>
        </AdminContentLayout>
      </AdminMainLayout>
    </AdminRootLayout>
  );
};

export default UserDetailView;
