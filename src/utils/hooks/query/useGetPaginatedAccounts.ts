import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UserService } from 'src/service/UserService';
import { IAccount } from 'src/types/global.type';

const useGetPaginatedAccounts = (accessToken: string, page: number) => {
  const userService = new UserService(accessToken);

  return useQuery<IAccount[], AxiosError>(['accounts', page], () => userService.getPaginatedAccounts(page), {
    enabled: !!accessToken && !!page,
    keepPreviousData: true,
  });
};

export default useGetPaginatedAccounts;
