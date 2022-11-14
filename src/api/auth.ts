import { useMutation } from 'react-query';
import { AuthService } from 'src/service/AuthService';
import { LocalStorageService } from 'src/service/LocalStorageService';
import { ILogin } from 'src/types/api';

const useRegisterMutation = () => {
  const authService = new AuthService();
  return useMutation({
    mutationFn: () => authService.register(),
  });
};

const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: ILogin) => {
      const authService = new AuthService();
      return authService.login(data);
    },
    onSuccess: (response) => {
      const localStorageService = new LocalStorageService();
      localStorageService.set('accessToken', response.data.accessToken);
    },
  });
};

export { useLoginMutation, useRegisterMutation };
