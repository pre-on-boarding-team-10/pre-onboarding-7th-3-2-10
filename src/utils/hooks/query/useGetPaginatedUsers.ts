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

interface IProcessedData {
  data: IUser[];
  hasNextPage: boolean;
}

const useGetPaginatedUsers = (page: number, accessToken: string) => {
  const userService = new UserService(accessToken);
  const queryClient = useQueryClient();

  const prefetchNextPage = async () => await queryClient.prefetchQuery(['users', page + 1], () => userService.getPaginatedUsers(page + 1));

  return useQuery<AxiosResponse<IUser[]>, AxiosError, IProcessedData>(['users', page], () => userService.getPaginatedUsers(page), {
    enabled: !!accessToken && !!page,
    staleTime: 1000 * 60 * 3,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    select: (response) => {
      const original = response.data;
      const nextPageData = queryClient.getQueryData<AxiosResponse<IUser[]>>(['users', page + 1]);
      prefetchNextPage();
      return {
        data: original,
        hasNextPage: nextPageData?.data.length !== 0,
      };
    },
  });
};

export default useGetPaginatedUsers;
