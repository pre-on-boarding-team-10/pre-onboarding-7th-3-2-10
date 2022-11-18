import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UserService } from 'src/service/UserService';
import { IUserSetting } from 'src/types/global.type';

const useGetUserSetting = (accessToken: string) => {
  const userService = new UserService(accessToken);

  return useQuery<IUserSetting[], AxiosError>({ queryKey: ['users', 'setting'], queryFn: () => userService.getUserSetting(), enabled: !!accessToken });
};

export default useGetUserSetting;
