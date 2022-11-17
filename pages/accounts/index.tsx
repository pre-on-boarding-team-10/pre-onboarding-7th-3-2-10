import { IncomingMessage } from 'http';
import { NextPageContext } from 'next';
import React, { useEffect } from 'react';
import cookie from 'cookie';
import { useSetRecoilState } from 'recoil';

import { IPageProps } from 'src/types/global.type';
import AccountListView from 'src/view/admin/AccountList.view';
import { accessTokenAtom } from 'src/utils/atom/auth';

const AccountsPage = (props: IPageProps) => {
  const setAccessToken = useSetRecoilState(accessTokenAtom);

  useEffect(() => {
    setAccessToken(props.accessToken);
  }, [props.accessToken]);

  return <AccountListView />;
};

export default AccountsPage;

export const getServerSideProps = async (ctx: NextPageContext) => {
  if (!ctx.req) return { props: {} };
  const req: IncomingMessage = ctx.req;
  const headerCookie = req.headers.cookie;

  if (!headerCookie)
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };

  const accessToken = cookie.parse(headerCookie).accessToken;

  return {
    props: {
      accessToken,
    },
  };
};
