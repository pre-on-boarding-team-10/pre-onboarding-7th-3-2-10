import { AxiosError, AxiosResponse } from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { UserService } from 'src/service/UserService';

export interface IUser {
  id: number;
  uuid: string;
  photo: string;
  name: string;
  email: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: string;
  updated_at: string;
}

const useGetPaginatedUsers = (page: number, accessToken: string) => {
  const userService = new UserService(accessToken);
  const queryClient = useQueryClient();

  return useQuery<AxiosResponse<IUser[]>, AxiosError>(['users', page], () => userService.getPaginatedUsers(page), {
    enabled: !!accessToken && !!page,
    keepPreviousData: true,
  });
};

export default useGetPaginatedUsers;
