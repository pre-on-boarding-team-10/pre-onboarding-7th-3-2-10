import React from 'react';
import LoginHeader from 'src/components/auth/Login/LoginHeader';
import LoginForm from 'src/components/auth/Login/LoginForm';
import LoginFooter from 'src/components/auth/Login/LoginFooter';

const Login = () => {
  // TODO api 연결 여기서!
  return (
    <main className="h-full flex flex-col justify-center items-center gap-8 bg-gray-100">
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </main>
  );
};

export default Login;
