import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UserService } from 'src/service/UserService';
import { IUser } from 'src/types/global.type';

const useGetUser = (accessToken: string, id: string) => {
  const userService = new UserService(accessToken);

  return useQuery<IUser, AxiosError>(['users', 'detail', id], () => userService.getUser(id), {
    enabled: !!accessToken,
  });
};

export default useGetUser;
