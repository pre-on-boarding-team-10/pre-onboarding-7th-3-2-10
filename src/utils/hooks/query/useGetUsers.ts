import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UserService } from 'src/service/UserService';
import { IUser } from 'src/types/global.type';

const useGetUsers = (accessToken: string) => {
  const userService = new UserService(accessToken);

  return useQuery<IUser[], AxiosError>({
    queryKey: ['users'],
    queryFn: () => userService.getUsers(),
    enabled: !!accessToken,
  });
};

export default useGetUsers;
