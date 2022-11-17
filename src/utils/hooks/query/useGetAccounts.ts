import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UserService } from 'src/service/UserService';
import { IAccount } from 'src/types/global.type';

const useGetAccounts = (accessToken: string) => {
  const userService = new UserService(accessToken);

  return useQuery<IAccount[], AxiosError>({ queryKey: ['users', 'accounts'], queryFn: () => userService.getAccounts(), enabled: !!accessToken });
};

export default useGetAccounts;
