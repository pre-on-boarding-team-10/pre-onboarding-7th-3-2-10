import axios from 'axios';
import { ILogin } from 'src/types/global.type';
import { AxiosBaseService } from './AxiosBaseService';

export class AuthService extends AxiosBaseService {
  constructor() {
    super(process.env.NEXT_PUBLIC_API_BASE_URL);
  }

  register() {
    return this.api({
      method: 'post',
      url: '/users/signup',
      data: {
        email: 'test@test.com',
        password: 'test11!',
      },
    });
  }

  loginAtJSONServer(data: ILogin) {
    return this.api({
      method: 'post',
      url: '/login',
      data,
    });
  }

  loginAtNextServer(data: ILogin) {
    return axios({
      method: 'post',
      url: '/api/login',
      data,
    });
  }

  logoutAtNextServer() {
    return axios({
      method: 'post',
      url: '/api/logout',
    });
  }
}
