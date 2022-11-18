import { AxiosBaseService } from './AxiosBaseService';

export class AxiosJSONService extends AxiosBaseService {
  constructor(token?: string) {
    super('http://localhost:4000', token);
  }
}
