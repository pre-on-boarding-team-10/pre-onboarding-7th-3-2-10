import React, { ChangeEvent, FormEvent, useState } from 'react';
import { ILogin } from 'src/types/global.type';
import useCreateUser from 'src/utils/hooks/query/useCreateUser';
import useLogin from 'src/utils/hooks/query/useLogin';
import useGetAccessToken from 'src/utils/hooks/useGetAccessToken';

interface IUserFormProps {
  currentPage: number;
}

const UserForm = (props: IUserFormProps) => {
  const { currentPage } = props;

  const [account, setAccount] = useState<ILogin>({
    email: '',
    password: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccount((prev) => ({ ...prev, [name]: value }));
  };

  const accessToken = useGetAccessToken();
  const { mutate: createUser } = useCreateUser(accessToken, currentPage);

  const onSubmitLoginForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(account);
    setAccount({ email: '', password: '' });
  };

  return (
    <section className="min-w-[27rem]">
      <div className="bg-white bg shadow-lg">
        <header className="px-6 py-3 font-semibold bg-gray-50">사용자 추가</header>
        <form className="flex flex-col gap-8 px-6 py-4" method="post" onSubmit={onSubmitLoginForm}>
          <input className="border w-full px-4 py-2" type="text" name="email" placeholder="이메일을 입력하세요" value={account.email} onChange={onChange} />
          <input
            className="border w-full px-4 py-2"
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            onChange={onChange}
            value={account.password}
          />
          <button className="border py-2 disabled:bg-gray-50 disabled:text-gray-400" type="submit">
            사용자 추가
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserForm;
