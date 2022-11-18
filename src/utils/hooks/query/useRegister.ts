import { useMutation } from 'react-query';
import { AuthService } from 'src/service/AuthService';

const useRegister = () => {
  const authService = new AuthService();

  return useMutation({
    mutationFn: () => authService.register(),
  });
};

export default useRegister;
