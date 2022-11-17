import { ILogin, IUpdateUserInfo } from 'src/types/global.type';
import { AxiosBaseService } from './AxiosBaseService';

export class UserService extends AxiosBaseService {
  constructor(token?: string) {
    super('http://localhost:4000', token);
  }

  async createUser(data: ILogin) {
    await this.api({
      method: 'post',
      url: '/users',
      data,
    });
  }

  async getUsers() {
    const response = await this.api({
      method: 'get',
      url: '/users',
    });

    return response.data;
  }

  async deleteUser(id: number) {
    await this.api({
      method: 'delete',
      url: `/users/${id}`,
    });
  }

  async updateUser(id: number, data: IUpdateUserInfo) {
    await this.api({
      method: 'patch',
      url: `/users/${id}`,
      data,
    });
  }

  async getPaginatedUsers(page: number, query?: string) {
    const response = await this.api({
      method: 'get',
      url: '/users',
      params: {
        _page: page,
        _limit: 10,
        q: query,
      },
    });
    return response.data;
  }

  async getUser(id: string) {
    const response = await this.api({
      method: 'get',
      url: `/users/${id}`,
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

  /**
   *
   * parameter user_id: id
   */
  async getAccounts(id?: number) {
    const response = await this.api({
      method: 'get',
      url: '/accounts',
      params: {
        user_id: id,
      },
    });
    return response.data;
  }
}
