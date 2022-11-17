import React, { useEffect } from 'react';
import UserDetailView from 'src/view/admin/UserDetail.view';
import { useSetRecoilState } from 'recoil';
import { accessTokenAtom } from 'src/utils/atom/auth';
import { IUsersPageProps } from 'src/types/global.type';
import { NextPageContext } from 'next';
import { IncomingMessage } from 'http';
import cookie from 'cookie';
import { dehydrate, QueryClient } from 'react-query';
import { UserService } from 'src/service/UserService';

const UserPage = (props: IUsersPageProps) => {
  const setAccessToken = useSetRecoilState(accessTokenAtom);

  useEffect(() => {
    setAccessToken(props.accessToken);
  }, [props.accessToken]);

  return <UserDetailView />;
};

export default UserPage;

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

  const id = ctx.query.id as string;

  await queryClient.prefetchQuery(['users', 'detail', id], () => userService.getUser(id));

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
