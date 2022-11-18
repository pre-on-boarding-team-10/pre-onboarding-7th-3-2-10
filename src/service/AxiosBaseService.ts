import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthService } from './AuthService';

export abstract class AxiosBaseService {
  api: AxiosInstance;
  protected token?: string;
  protected readonly baseURL: string;

  public constructor(token?: string) {
    this.baseURL = 'https://pre-onboarding-7th-3-2-10.vercel.app/';

    this.api = axios.create({
      baseURL: this.baseURL,
    });
    this.token = token;
    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.api.interceptors.request.use(this.handleRequest);
  };

  private handleRequest = (config: AxiosRequestConfig) => {
    if (!this.token) return config;

    if (!config.headers) config.headers = {};
    config.headers['Authorization'] = `Bearer ${this.token}`;
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
  };

  private initializeResponseInterceptor = () => {
    this.api.interceptors.response.use(this.handleResponse, this.handleResponseError);
  };

  private handleResponse = (config: AxiosResponse) => {
    return config;
  };

  private handleResponseError = (error: AxiosError) => {
    const authService = new AuthService();

    if (error.response?.status === 401) {
      window.location.href = '/';
      authService.logoutAtNextServer();
      return;
    }
    return Promise.reject(error);
  };
}
