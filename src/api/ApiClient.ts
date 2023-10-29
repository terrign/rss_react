class ApiClient {
  private baseURL = 'https://swapi.dev/api/';

  private getURLString(endpoint: string, search?: string) {
    let url = this.baseURL;
    url += search ? `${endpoint}/?search=${search}` : `${endpoint}`;
    return url;
  }

  async getStarships(search?: string) {
    let result: Response | null;
    try {
      result = search
        ? await fetch(this.getURLString('starships', search))
        : await fetch(this.getURLString('starships'));
    } catch (e) {
      const { message } = e as Error;
      result = null;
      console.error(message);
    }
    return result?.json();
  }
}

const api = new ApiClient();
export default api;
