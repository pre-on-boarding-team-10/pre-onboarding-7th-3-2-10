export class SessionStorageService {
  get(key: string) {
    if (typeof window !== undefined) {
      sessionStorage.getItem(key);
    }
  }

  set(key: string, value: string) {
    if (typeof window !== undefined) {
      sessionStorage.setItem(key, value);
    }
  }

  remove(key: string) {
    if (typeof window !== undefined) {
      sessionStorage.removeItem(key);
    }
  }
}
