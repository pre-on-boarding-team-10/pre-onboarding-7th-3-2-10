import React from 'react';
import { NextPageContext } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { UserService } from 'src/service/UserService';
import UserList from 'src/view/admin/UserList.view';
import cookie from 'cookie';
import { IncomingMessage } from 'http';

const UsersPage = () => {
  return <UserList />;
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

  const queryClient = new QueryClient();
  const userService = new UserService(accessToken);

  await queryClient.prefetchQuery(['users'], () => userService.getUsers());
  await queryClient.prefetchQuery(['users', 'setting'], () => userService.getUserSetting());
  await queryClient.prefetchQuery(['users', 'accounts'], () => userService.getAccounts());

  if (!dehydrate(queryClient)) return { props: {} };

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
