import { IncomingMessage } from 'http';
import { NextPageContext } from 'next';
import React from 'react';
import Login from 'src/view/Login.view';

const RootPage = () => {
  // TODO: serverside나 page 관련 로직은 여기서 처리
  return <Login />;
};

export default RootPage;

export const getServerSideProps = async (ctx: NextPageContext) => {
  if (!ctx.req) return { props: {} };

  const req: IncomingMessage = ctx.req;
  const headerCookie = req.headers.cookie;

  if (headerCookie)
    return {
      redirect: {
        permanent: false,
        destination: '/users',
      },
    };

  return { props: {} };
};
