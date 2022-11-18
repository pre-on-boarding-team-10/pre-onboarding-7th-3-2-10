import React, { useEffect } from 'react';
import { NextPageContext } from 'next';
import cookie from 'cookie';
import { IncomingMessage } from 'http';
import { useSetRecoilState } from 'recoil';

import UserListView from 'src/view/admin/UserList.view';
import { accessTokenAtom } from 'src/utils/atom/auth';
import { IPageProps } from 'src/types/global.type';

const UsersPage = (props: IPageProps) => {
  const setAccessToken = useSetRecoilState(accessTokenAtom);

  useEffect(() => {
    setAccessToken(props.accessToken);
  }, [props.accessToken]);

  return <UserListView />;
};

export default UsersPage;

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
