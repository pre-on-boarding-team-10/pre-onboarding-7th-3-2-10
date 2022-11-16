import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { UserService } from 'src/service/UserService';

interface IAccount {
  id: number;
  user_id: number;
  uuid: string;
  broker_id: string;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const useGetAccounts = (accessToken: string) => {
  const userService = new UserService(accessToken);

  return useQuery<AxiosResponse<IAccount[]>, AxiosError>(['users', 'accounts'], () => userService.getAccounts(), {
    enabled: !!accessToken,
  });
};

export default useGetAccounts;
