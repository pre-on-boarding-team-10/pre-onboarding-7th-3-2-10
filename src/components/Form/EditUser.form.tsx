import React, { ChangeEvent, FormEvent, useState } from 'react';
import { IUser } from 'src/types/global.type';
import useUpdateUser from 'src/utils/hooks/query/useUpdateUser';
import useGetAccessToken from 'src/utils/hooks/useGetAccessToken';

interface IUserFormProps {
  id: number;
  currentPage: number;
  user: IUser;
}

interface IUserInfo {
  name: string;
}

const EditUserForm = (props: IUserFormProps) => {
  const { id, currentPage, user } = props;

  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: user.name || '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const accessToken = useGetAccessToken();
  const { mutateAsync: updateUser } = useUpdateUser(accessToken, currentPage);

  const onSubmitLoginForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateUser({ id, data: userInfo });
    setUserInfo({ name: '' });
  };

  return (
    <section className="min-w-[27rem]">
      <div className="bg-white bg shadow-lg">
        <header className="px-6 py-3 font-semibold bg-gray-50">사용자 수정</header>
        <form className="flex flex-col gap-8 px-6 py-4" method="post" onSubmit={onSubmitLoginForm}>
          <input className="border w-full px-4 py-2" type="text" name="name" placeholder="이름을 입력하세요" value={userInfo.name} onChange={onChange} />

          <button className="border py-2 disabled:bg-gray-50 disabled:text-gray-400" type="submit">
            수정하기
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditUserForm;
