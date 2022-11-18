import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MainHeader from 'src/components/common/MainHeader';
import SideNav from 'src/components/common/SideNav';
import { AdminContentLayout, AdminMainLayout, AdminRootLayout } from 'src/components/layout/Admin.layout';
import { IAccount } from 'src/types/global.type';

import useGetPaginatedAccounts from 'src/utils/hooks/query/useGetPaginatedAccounts';

import useGetAccessToken from 'src/utils/hooks/useGetAccessToken';

const MAX_PAGE = 40;

const AccountListView = () => {
  const router = useRouter();
  const query = router.query;
  const accessToken = useGetAccessToken();
  const [currentPage, setCurrentPage] = useState<number>(query.page ? Number(query.page) : 1);
  const { data: paginatedAccounts, isPreviousData } = useGetPaginatedAccounts(accessToken, currentPage);

  const [tableData, setTableData] = useState<IAccount[]>([]);

  useEffect(() => {
    if (paginatedAccounts) {
      const mapped = paginatedAccounts.map((account) => {
        return {
          ...account,
          is_active: account.is_active ? 'O' : 'X',
          created_at: format(new Date(account.created_at), 'yyyy-MM-dd'),
        };
      });
      setTableData(mapped);
    }
  }, [paginatedAccounts]);

  return (
    <AdminRootLayout>
      <SideNav />
      <AdminMainLayout>
        <MainHeader />
        <AdminContentLayout>
          {/* 계좌 목록 */}
          <article className="flex flex-col gap-4 justify-between min-h-[30rem]">
            <section className="border border-gray-300 bg-white min-h-[352px]">
              <header className="grid grid-cols-7 items-center text-xs  font-medium bg-gray-50 border-b-[1px]">
                {/* <h1 className="table-cell_exist_border">보유중인 계좌수</h1> */}
                {/* <h1 className="table-cell_exist_border">이메일 주소</h1> */}
                <h1 className="table-cell_exist_border">계좌번호</h1>
                <h1 className="table-cell_exist_border">계좌상태</h1>
                <h1 className="table-cell_exist_border">계좌명</h1>
                <h1 className="table-cell_exist_border">평가금액</h1>
                <h1 className="table-cell_exist_border">입금금액</h1>
                <h1 className="table-cell_exist_border">계좌 활성화 여부</h1>
                <h1 className="table-cell_exist_border">계좌 개설일</h1>
                {/* <h1 className="table-cell_none_border">가입일</h1> */}
              </header>
              <section className="grid grid-cols-7 text-xs h-full">
                {tableData.map((data, idx) => {
                  return (
                    <React.Fragment key={`accounts-${data.id}-${idx}`}>
                      {/* <div className="table-main-cell_p">{data.user_name}</div> */}
                      {/* <div className="table-main-cell_p">{data.broker_name}</div> */}
                      <div className="p-2">
                        <Link
                          href={{
                            pathname: `/accounts/${data.id}`,
                          }}
                        >
                          {data.number}
                        </Link>
                      </div>
                      <div className="table-main-cell_p">{data.status}</div>
                      <div className="table-main-cell_p">{data.name}</div>
                      <div className="table-main-cell_p">{data.assets}</div>
                      <div className="table-main-cell_p">{data.payments}</div>
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
                    page: Math.max(currentPage - 1, 0),
                  },
                }}
                className={`text-sm ${currentPage === 1 && 'opacity-30 pointer-events-none'}`}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                passHref
                shallow
                replace
              >
                {`<`}
              </Link>
              <span className="text-sm">{currentPage}</span>
              <Link
                href={{
                  pathname: router.pathname,
                  query: {
                    ...query,
                    page: currentPage + 1,
                  },
                }}
                className={`text-sm ${(isPreviousData || currentPage >= MAX_PAGE) && 'opacity-30 pointer-events-none'}`}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                passHref
                shallow
                replace
              >
                {`>`}
              </Link>
            </div>
          </article>
        </AdminContentLayout>
      </AdminMainLayout>
    </AdminRootLayout>
  );
};

export default AccountListView;
