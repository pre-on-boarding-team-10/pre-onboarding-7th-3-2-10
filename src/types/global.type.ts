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

export interface IPageProps {
  accessToken: string;
}
