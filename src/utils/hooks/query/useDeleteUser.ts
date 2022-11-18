import { useMutation, useQueryClient } from 'react-query';
import { UserService } from 'src/service/UserService';

const useDeleteUser = (accessToken: string, page: number) => {
  const userService = new UserService(accessToken);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => userService.deleteUser(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries(['users', page]);
      queryClient.invalidateQueries(['users', 'detail', id]);
    },
  });
};

export default useDeleteUser;
