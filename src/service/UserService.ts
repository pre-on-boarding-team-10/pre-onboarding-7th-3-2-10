import { AxiosBaseService } from './AxiosBaseService';

export class UserService extends AxiosBaseService {
  constructor(token?: string) {
    super('http://localhost:4000', token);
  }

  async getUsers() {
    const response = await this.api({
      method: 'get',
      url: '/users',
    });

    return response.data;
  }

  async getUserSetting() {
    const response = await this.api({
      method: 'get',
      url: '/userSetting',
    });

    return response.data;
  }

  async getAccounts() {
    const response = await this.api({
      method: 'get',
      url: '/accounts',
    });

    return response.data;
  }
}
