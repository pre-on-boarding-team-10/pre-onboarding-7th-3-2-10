import { IncomingMessage } from 'http';
import { NextPageContext } from 'next';
import React from 'react';
import LoginView from 'src/view/Login.view';

const RootPage = () => {
  return <LoginView />;
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
