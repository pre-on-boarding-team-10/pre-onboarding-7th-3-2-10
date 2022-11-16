import React, { useEffect } from 'react';
import { NextPageContext } from 'next';
import cookie from 'cookie';
import { IncomingMessage } from 'http';
import { useSetRecoilState } from 'recoil';

import UserList from 'src/view/admin/UserList.view';
import { accessTokenAtom } from 'src/utils/atom/auth';

interface IUsersPageProps {
  accessToken: string;
}

const UsersPage = (props: IUsersPageProps) => {
  const setAccessToken = useSetRecoilState(accessTokenAtom);

  useEffect(() => {
    setAccessToken(props.accessToken);
  }, [props.accessToken]);

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

  // const queryClient = new QueryClient();
  // const userService = new UserService(accessToken);

  // console.log('userService.get', userService);

  // 상세정보 조회

  // await queryClient.prefetchQuery(['users', 1], () => userService.getPaginateUsers(1));
  // await queryClient.prefetchQuery(['users', 'setting'], () => userService.getUserSetting());
  // await queryClient.prefetchQuery(['users', 'accounts'], () => userService.getAccounts());

  // if (!dehydrate(queryClient)) return { props: {} };

  return {
    props: {
      // dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      accessToken,
    },
  };
};
