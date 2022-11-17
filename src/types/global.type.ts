import { Dispatch } from 'react';

export interface ILogin {
  email: string;
  password: string;
}

export interface IAccount {
  id: number;
  user_id: number;
  uuid: string;
  broker_id: string;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: string | boolean;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  id: number;
  uuid: string;
  photo: string;
  name: string;
  email: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: string;
  updated_at: string;
}

export interface IUserSetting {
  id: number;
  uuid: string;
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  updated_at: string;
}

export interface IUpdateUserInfo {
  name: string;
}

export interface IUpdateUserParams {
  id: number;
  data: IUpdateUserInfo;
}

export interface IPageProps {
  accessToken: string;
}

export interface ISearchValueState {
  changed: string;
  submitted: string;
}

export interface ISearchFilterBarProps {
  searchValue: ISearchValueState;
  setSearchValue: Dispatch<ISearchValueState>;
  setCurrentPage: Dispatch<number>;
}
