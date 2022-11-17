import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UserService } from 'src/service/UserService';
import { IUser } from 'src/types/global.type';

const useGetPaginatedUsers = (page: number, accessToken: string, query?: string) => {
  const userService = new UserService(accessToken);

  return useQuery<IUser[], AxiosError>({
    queryKey: ['users', page, query],
    queryFn: () => userService.getPaginatedUsers(page, query),
    enabled: (!!accessToken && !!page) || !!query,
    keepPreviousData: true,
  });
};

export default useGetPaginatedUsers;
