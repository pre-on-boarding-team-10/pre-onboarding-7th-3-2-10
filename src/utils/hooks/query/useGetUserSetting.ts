import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { UserService } from 'src/service/UserService';

interface IUserSetting {
  id: number;
  uuid: string;
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  updated_at: string;
}

const useGetUserSetting = (accessToken: string) => {
  const userService = new UserService(accessToken);

  return useQuery<AxiosResponse<IUserSetting[]>, AxiosError>(['users', 'setting'], () => userService.getUserSetting(), {
    enabled: !!accessToken,
  });
};

export default useGetUserSetting;
