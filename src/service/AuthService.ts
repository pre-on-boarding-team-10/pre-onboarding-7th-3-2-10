import { useLoginMutation } from 'src/utils/hooks/query/useLogin';
import api from 'src/config/interceptor';
import { ILogin } from 'src/utils/hooks/query/query.type';

export class AuthService {
  register() {
    return api({
      method: 'post',
      url: '/users/signup',
      data: {
        email: 'test@test.com',
        password: 'test11!',
      },
    });
  }

  login(data: ILogin) {
    return api({
      method: 'post',
      url: '/login',
      data,
    });
  }
}
