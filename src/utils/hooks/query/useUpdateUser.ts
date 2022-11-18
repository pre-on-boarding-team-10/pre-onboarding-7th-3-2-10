import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { UserService } from 'src/service/UserService';
import { IUpdateUserParams } from 'src/types/global.type';

const useUpdateUser = (accessToken: string, page: number) => {
  const userService = new UserService(accessToken);
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: ({ id, data }: IUpdateUserParams) => userService.updateUser(id, data),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries(['users', page]);
      queryClient.invalidateQueries(['users', 'detail', id]);
      router.push({
        pathname: '/users',
        query: {
          q: router.query.q || '',
          searching: !!router.query.searching,
          page,
        },
      });
    },
  });
};

export default useUpdateUser;
