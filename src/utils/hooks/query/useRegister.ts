import { useMutation } from 'react-query';
import { AuthService } from 'src/service/AuthService';

const useRegister = () => {
  const authService = new AuthService();

  return useMutation({
    mutationFn: () => authService.register(),
    onSuccess: () => alert('email은 test@test.com / password는 test11! 계정이 생성되었습니다.'),
    onError: () => alert('이미 만들어진 계정이거나 회원가입을 수행하지 못하였습니다.'),
  });
};

export default useRegister;
