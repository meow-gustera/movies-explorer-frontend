import { MOVIES_API_URL } from '../utils/utils.js';

class MoviesApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
      headers: {
        ...this._headers,
      }
    })
      .then((res) => {
        return this._checkStatus(res);
      })
  }
}

const beatfilmApi = new MoviesApi({
  baseUrl: MOVIES_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default beatfilmApi;