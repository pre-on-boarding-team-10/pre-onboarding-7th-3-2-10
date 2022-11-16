import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { UserService } from 'src/service/UserService';
import { IUser } from './useGetPaginatedUsers';

const useGetUsers = (accessToken: string) => {
  const userService = new UserService(accessToken);

  return useQuery<AxiosResponse<IUser[]>, AxiosError>(['users'], () => userService.getUsers(), {
    enabled: !!accessToken,
  });
};

export default useGetUsers;
