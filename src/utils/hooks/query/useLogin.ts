import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { AuthService } from 'src/service/AuthService';
import { ILogin } from 'src/types/global.type';

const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: ILogin) => {
      const authService = new AuthService();
      return authService.loginAtNextServer(data);
    },
    onSuccess: () => {
      router.push('/user-list');
    },
  });
};

export default useLogin;
