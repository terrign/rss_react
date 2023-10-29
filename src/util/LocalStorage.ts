class LocalStorageService {
  private store: Storage = localStorage;

  set(key: string, value: string) {
    this.store.setItem(key, value);
  }

  del(key: string) {
    this.store.removeItem(key);
  }

  get(key: string) {
    return this.store.getItem(key);
  }
}

const LocalStorage = new LocalStorageService();

export default LocalStorage;
