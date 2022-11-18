import { useRouter } from 'next/router';
import React from 'react';
import { IUser } from 'src/types/global.type';
import ThemeOfDarkTableTemplate from './ThemeOfDark.template';

interface IUserInfoTableProps {
  user: IUser;
}

const UserInfoTable = (props: IUserInfoTableProps) => {
  const { user } = props;
  return <ThemeOfDarkTableTemplate renderTableBody={<UserInfoTableBody user={user} />} />;
};

export default UserInfoTable;

const UserInfoTableBody = (props: IUserInfoTableProps) => {
  const { user } = props;
  const router = useRouter();
  const query = router.query;

  return (
    <React.Fragment>
      <tr className="dark_table_tr">
        <th className="dark_table_wide_th">이름</th>
        <td className="p-4">{user.name}</td>
        <th className="dark_table_wide_th">성별</th>
        <td className="p-4">{user.gender_origin}</td>
        <th className="dark_table_wide_th">생년월일</th>
        <td className="p-4">{user.birth_date}</td>
      </tr>
      <tr className="dark_table_tr">
        <th className="dark_table_wide_th">주소</th>
        <td className="p-4">{user.address}</td>
        <th className="dark_table_wide_th">상세 주소</th>
        <td className="p-4">{user.detail_address}</td>
        <th className="dark_table_wide_th">이메일</th>
        <td className="p-4">{user.email}</td>
      </tr>
      <tr className="dark_table_tr">
        <th className="dark_table_wide_th">핸드폰</th>
        <td className="p-4">{user.phone_number}</td>
        <th className="dark_table_wide_th">연령</th>
        <td className="p-4">{user.age}</td>
        <th className="dark_table_wide_th">가입일</th>
        <td className="p-4">{user.created_at}</td>
      </tr>
      <tr className="dark_table_tr">
        <th className="dark_table_wide_th">최근 로그인</th>
        <td className="p-4">{user.last_login}</td>
        <th className="dark_table_wide_th">혜택 정보 수신</th>
        <td className="p-4">{query?.allow_marketing_push}</td>
        <th className="dark_table_wide_th">활성화 여부</th>
        <td className="p-4">{query?.is_active}</td>
      </tr>
    </React.Fragment>
  );
};
