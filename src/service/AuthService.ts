import { useLoginMutation } from 'src/api/auth';
import api from 'src/config/interceptor';
import { ILogin } from 'src/types/api';

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
