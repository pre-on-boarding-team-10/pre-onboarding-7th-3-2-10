import React, { ChangeEvent, FormEvent, useState } from 'react';
import { ILogin } from 'src/types/global.type';
import useLogin from 'src/utils/hooks/query/useLogin';
import useRegister from 'src/utils/hooks/query/useRegister';

const LoginForm = () => {
  const [account, setAccount] = useState<ILogin>({
    email: '',
    password: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccount((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate: login } = useLogin();
  const { mutate: register } = useRegister();

  const onSubmitLoginForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(account);
  };

  return (
    <section className="min-w-[27rem]">
      <div className="bg-white shadow-lg">
        <header className="px-6 py-3 font-semibold bg-gray-50">로그인</header>
        <form className="flex flex-col gap-8 px-6 py-4" method="post" onSubmit={onSubmitLoginForm}>
          <input className="border w-full px-4 py-2" type="text" name="email" placeholder="이메일을 입력하세요" onChange={onChange} />
          <input className="border w-full px-4 py-2" type="password" name="password" placeholder="비밀번호를 입력하세요" onChange={onChange} />
          <div className="flex gap-2">
            <button className="border py-2 disabled:bg-gray-50 disabled:text-gray-400 w-full" type="submit">
              로그인
            </button>
            <button className="border py-2 disabled:bg-gray-50 disabled:text-gray-400 w-full" type="button" onClick={() => register()}>
              회원가입
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
