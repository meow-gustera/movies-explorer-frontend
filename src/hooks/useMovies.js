import { useState, useCallback, useEffect, useMemo } from 'react';
import { SHORT_DURATION } from '../utils/utils';
import beatfilmApi from '../utils/MoviesApi';

export function useMovies() {
  const [state, setState] = useState({
    isLoading: false,
    movies: [],
    error: null
  })

  const checkedStatusCheckbox = localStorage.getItem('checkedStatusCheckbox');
  const [statusCheckbox, setStatusCheckbox] = useState(JSON.parse(checkedStatusCheckbox) || false);

  const searchedStatusStorage = localStorage.getItem('searchedWord');
  const [search, setSearch] = useState(searchedStatusStorage || '');

  async function handleFetchMovies() {
    try {
      const movies = await beatfilmApi.getMovies();
      setState(state => ({
        ...state,
        movies,
      }));
    } catch (err) {
      setState(state => ({
        ...state,
        error: err.status,
      }));
    } finally {
      setState(state => ({
        ...state,
        isLoading: false,
      }));
    }
  };

  const filteredMoviesList = useMemo(() => {
    const { movies } = state;

    //Если Storage пуст, то не было ни одного поиска
    if (!searchedStatusStorage && !checkedStatusCheckbox) {
      return [];
    }

    else if (!search && !statusCheckbox) {
      return movies;
    } else {
      const resultSearch = [];

      for (let movie of movies) {
        const { nameRU, nameEN, duration } = movie;
        const shortMovie = statusCheckbox && duration <= SHORT_DURATION;
        const searchedWord = searchedStatusStorage && (nameRU.toLowerCase().includes(searchedStatusStorage.toLowerCase()) || nameEN.toLowerCase().includes(searchedStatusStorage.toLowerCase()));

        if (searchedStatusStorage && statusCheckbox) {
          if (searchedWord && shortMovie) {
            resultSearch.push(movie);
          }
        } else if (searchedStatusStorage && !statusCheckbox) {
          if (searchedWord) {
            resultSearch.push(movie);
          }
        }
        if (!searchedStatusStorage && statusCheckbox) {
          if (shortMovie) {
            resultSearch.push(movie);
          }
        }
      }
      return resultSearch;
    }
  }, [checkedStatusCheckbox, searchedStatusStorage, state.movies]);

  const handleSetSearch = useCallback((value) => {
    setSearch(value);
    console.log(value)
    localStorage.setItem('searchedWord', value);
  }, []);

  const handleSetStatusCheckbox = () => {
    setStatusCheckbox(!statusCheckbox);
    localStorage.setItem('checkedStatusCheckbox', !statusCheckbox);
  };

  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
    })
    handleFetchMovies();
  }, []);

  return {
    handleSetSearch,
    handleSetStatusCheckbox,
    checkedStatusCheckbox,
    statusCheckbox,
    isLoading: state.isLoading,
    error: state.error,
    setState, state,
    MoviesList: filteredMoviesList,
    searchedStatusStorage
  }
}  