import React from 'react';
import LoginHeader from 'src/components/Header/Login.header';
import LoginForm from 'src/components/Form/Login.form';
import LoginFooter from 'src/components/Footer/Login.footer';
import RootLayout from 'src/components/layout/Root.layout';

const Login = () => {
  return (
    <RootLayout>
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </RootLayout>
  );
};

export default Login;
