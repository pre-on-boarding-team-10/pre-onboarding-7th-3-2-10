import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UserService } from 'src/service/UserService';
import { IAccount } from 'src/types/global.type';

const useGetAccounts = (accessToken: string, id?: number) => {
  const userService = new UserService(accessToken);

  return useQuery<IAccount[], AxiosError>({ queryKey: ['users', 'accounts', id], queryFn: () => userService.getAccounts(id), enabled: !!accessToken });
};

export default useGetAccounts;
