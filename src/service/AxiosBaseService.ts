import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthService } from './AuthService';

export abstract class AxiosBaseService {
  api: AxiosInstance;
  protected token?: string;
  protected readonly baseURL: string;

  public constructor(baseURL: string, token?: string) {
    this.baseURL = baseURL;
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
    if (!config.headers) config.headers = {};
    config.headers['Authorization'] = `Bearer ${this.token}`;
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
