class ApiClient {
  private baseURL = 'https://swapi.dev/api/';

  private getURLString(endpoint: string, search: URLSearchParams) {
    let url = this.baseURL;
    url += search ? `${endpoint}/?${search}` : `${endpoint}`;
    return url;
  }

  async getStarships(search: URLSearchParams) {
    let result: Response | null;
    try {
      result = await fetch(this.getURLString('starships', search));
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
