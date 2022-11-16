import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { AuthService } from 'src/service/AuthService';
import { SessionStorageService } from 'src/service/SessionStorageService';
import { ILogin } from 'src/types/global.type';
import cookie from 'js-cookie';

const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: ILogin) => {
      const authService = new AuthService();
      return authService.loginAtNextServer(data);
    },
    onSuccess: () => {
      router.push('/users');
    },
  });
};

export default useLogin;
