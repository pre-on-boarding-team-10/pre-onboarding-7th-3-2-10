import React from 'react';
import { useRouter } from 'next/router';

import MainHeader from 'src/components/common/MainHeader';
import SideNav from 'src/components/common/SideNav';
import { AdminContentLayout, AdminMainLayout, AdminRootLayout } from 'src/components/layout/Admin.layout';
import useGetUser from 'src/utils/hooks/query/useGetUser';
import useGetAccessToken from 'src/utils/hooks/useGetAccessToken';

const UserDetailView = () => {
  const router = useRouter();
  const { query } = router;
  const accessToken = useGetAccessToken();
  const { data: user } = useGetUser(accessToken, router.query.id as string);

  return (
    <AdminRootLayout>
      <SideNav />
      <AdminMainLayout>
        <MainHeader />
        <AdminContentLayout>
          {/* // 사용자 정보 */}
          <h1 className="title-main">사용자 정보</h1>
          <section className="grid grid-cols-6 grid-rows-3 border border-gray-300 text-xs">
            <h1 className="table-cell-title_border_br">이름</h1>
            <div className="table-cell_border_br">{user?.name}</div>
            <h1 className="table-cell-title_border_br">성별</h1>
            <div className="table-cell_border_br">{user?.gender_origin}</div>
            <h1 className="table-cell-title_border_br font-table-title">생년월일</h1>
            <div className="table-cell_border_b">{user?.birth_date}</div>
            <h1 className="table-cell-title_border_br">주소</h1>
            <div className="table-cell_border_br">{user?.address}</div>
            <h1 className="table-cell-title_border_br ">상세 주소</h1>
            <div className="table-cell_border_br">{user?.detail_address}</div>
            <h1 className="table-cell-title_border_br">이메일</h1>
            <div className="table-cell_border_b">{user?.email}</div>
            <h1 className="table-cell-title_border_br">핸드폰</h1>
            <div className="table-cell_border_br">{user?.phone_number}</div>
            <h1 className="table-cell-title_border_br">연령</h1>
            <div className="table-cell_border_br">{user?.age}</div>
            <h1 className="table-cell-title_border_br">가입일</h1>
            <div className="table-cell_border_b">{user?.created_at}</div>
            <h1 className="table-cell-title_border_r">최근 로그인</h1>
            <div className="table-cell_border_r">{user?.last_login}</div>
            <h1 className="table-cell-title_border_r">혜택 정보 수신</h1>
            <div className="table-cell_border_r">{query?.allow_marketing_push}</div>
            <h1 className="table-cell-title_border_r">활성화 여부</h1>
            <div className="table-cell_border_r">{query?.is_active}</div>
          </section>

          {/* 사용자 계좌 목록 */}
        </AdminContentLayout>
      </AdminMainLayout>
    </AdminRootLayout>
  );
};

export default UserDetailView;
