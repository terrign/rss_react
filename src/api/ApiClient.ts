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
      result = null;
    }
    return result?.json();
  }

  async getShipById(id: string) {
    let res: Response | null;
    try {
      res = await fetch(`${this.baseURL}/starships/${id}`);
    } catch (e) {
      res = null;
    }
    return res?.json();
  }
}

const api = new ApiClient();
export default api;
