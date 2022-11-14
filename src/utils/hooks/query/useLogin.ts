import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { AuthService } from 'src/service/AuthService';
import { LocalStorageService } from 'src/service/LocalStorageService';
import { ILogin } from 'src/types/global.type';

const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: ILogin) => {
      const authService = new AuthService();
      return authService.login(data);
    },
    onSuccess: (response) => {
      const localStorageService = new LocalStorageService();
      localStorageService.set('accessToken', response.data.accessToken);
      router.push('/users');
    },
  });
};

export default useLogin;
