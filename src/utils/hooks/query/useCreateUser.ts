import { useMutation, useQueryClient } from 'react-query';
import { UserService } from 'src/service/UserService';
import { ILogin } from 'src/types/global.type';

const useCreateUser = (accessToken: string, page: number) => {
  const userService = new UserService(accessToken);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ILogin) => userService.createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['users', page]);
    },
  });
};

export default useCreateUser;
