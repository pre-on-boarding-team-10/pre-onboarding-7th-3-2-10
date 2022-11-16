import api from 'src/config/interceptor';

export class UserService {
  getUsers() {
    return api({
      method: 'get',
      url: '/users',
    });
  }

  getUserSetting() {
    return api({
      method: 'get',
      url: '/userSetting',
    });
  }

  getAccounts() {
    return api({
      method: 'get',
      url: '/accounts',
    });
  }
}
