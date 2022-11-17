import { AxiosBaseService } from './AxiosBaseService';

export class UserService extends AxiosBaseService {
  constructor(token?: string) {
    super('http://localhost:4000', token);
  }

  async getUsers() {
    return await this.api({
      method: 'get',
      url: '/users',
    });
  }

  async getPaginatedUsers(page: number) {
    return await this.api({
      method: 'get',
      url: '/users',
      params: {
        _page: page,
        _limit: 10,
      },
    });
  }

  async getUser(id: string) {
    const response = await this.api({
      method: 'get',
      url: `/users/${id}`,
    });
    return response.data;
  }

  async getUserSetting() {
    return await this.api({
      method: 'get',
      url: '/userSetting',
    });
  }

  async getAccounts() {
    return await this.api({
      method: 'get',
      url: '/accounts',
    });
  }
}
