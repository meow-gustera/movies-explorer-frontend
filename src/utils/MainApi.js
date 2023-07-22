import { MAIN_API_URL, MOVIES_API_URL_BASE } from './utils';

class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  }

  //Регистрация
  signUp(name, password, email) {
    return fetch(`${this._baseUrl}signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        password: password,
        email: email
      }),
      credentials: 'include'
    })
      .then((res) => {
        return this._checkStatus(res);
      })
  }

  //Логин
  signIn(password, email) {
    return fetch(`${this._baseUrl}signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        email: email
      }),
      credentials: 'include'
    })
      .then((res) => {
        return this._checkStatus(res);
      })
  }

  //выход
  signOut() {
    return fetch(`${this._baseUrl}signout`, {
      method: "POST",
      headers: this._headers,
      credentials: 'include'
    })
      .then((res) => {
        return this._checkStatus(res);
      })
  }

  getAuth() {
    return fetch(`${this._baseUrl}users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include'
    })
      .then((res) => {
        return this._checkStatus(res);
      })
  }

  editProfile(newName, newEmail) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        name: newName,
        email: newEmail
      }),
      credentials: 'include'
    })
      .then((res) => {
        return this._checkStatus(res);
      })
  }

  //Добавленые фильмы пользователя
  getMovies() {
    return fetch(`${this._baseUrl}movies`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
      credentials: 'include'
    })
      .then((res) => {
        return this._checkStatus(res);
      })
  }

  //Добавленые фильмы пользователя
  postUserMovie(movie) {
    return fetch(`${this._baseUrl}movies`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_API_URL_BASE}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_API_URL_BASE}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
      credentials: 'include'
    })
      .then((res) => {
        return this._checkStatus(res);
      })
  }

  //Добавленые фильмы пользователя
  deleteUserMovie(movieId) {
    return fetch(`${this._baseUrl}movies/${movieId}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
      },
      credentials: 'include'
    })
      .then((res) => {
        return this._checkStatus(res);
      })
  }
}

const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mainApi;