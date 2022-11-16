import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
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

const useGetUsers = () => {
  const userService = new UserService();

  return useQuery<IUser[], AxiosError>(['users'], userService.getUsers);
};

export default useGetUsers;
