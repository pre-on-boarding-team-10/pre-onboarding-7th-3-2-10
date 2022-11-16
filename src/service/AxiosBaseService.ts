import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

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
  }

  private initializeRequestInterceptor = () => {
    this.api.interceptors.request.use(this.handleRequest);
  };

  private handleRequest = (config: AxiosRequestConfig) => {
    config.headers!['Authorization'] = `Bearer ${this.token}`;
    return config;
  };
}
