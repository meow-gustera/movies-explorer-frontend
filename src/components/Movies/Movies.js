import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { useMovies } from '../../hooks/useMovies';
import { useUserMovies } from '../../hooks/useUserMovies';
import { useResize } from '../../hooks/useResize';
import { SIZE_MOBILE, SIZE_DESKTOP, INIT_MOVIES_DESKTOP, INIT_MOVIES_TABLET, INIT_MOVIES_MOBILE, ELSE_MOVIES_DESKTOP, ELSE_MOVIES_MOBILE } from '../../utils/utils';
import { useEffect, useState } from 'react'

function Movies() {
  const {
    handleSetSearch,
    handleSetStatusCheckbox,
    statusCheckbox,
    MoviesList,
    isLoading,
    searchedStatusStorage
  } = useMovies();

  const {
    handleAddMovie,
    handleDeleteMovie,
    UserMoviesList
  } = useUserMovies();

  const windowWidthSize = useResize();

  const [visibleMoviesList, setVisibleMoviesList] = useState([]);
  const [buttonElseMovies, setButtonElseMovies] = useState(false);

  function checkStatusButtonElseMovies() {
    if (visibleMoviesList.length + 2 >= MoviesList.length) {
      setButtonElseMovies(true)
    } else {
      setButtonElseMovies(false);
    }
  }

  useEffect(() => {
    if (windowWidthSize > SIZE_DESKTOP) {
      setVisibleMoviesList(MoviesList.slice(0, INIT_MOVIES_DESKTOP));
    } else if (windowWidthSize < SIZE_DESKTOP && windowWidthSize > SIZE_MOBILE) {
      setVisibleMoviesList(MoviesList.slice(0, INIT_MOVIES_TABLET));
    }
    else if (windowWidthSize < SIZE_MOBILE) {
      setVisibleMoviesList(MoviesList.slice(0, INIT_MOVIES_MOBILE));
    }
    checkStatusButtonElseMovies();
  }, [MoviesList, statusCheckbox])

  function handleElseMovies() {
    if (windowWidthSize > SIZE_DESKTOP) {
      setVisibleMoviesList(MoviesList.slice(0, visibleMoviesList.length + ELSE_MOVIES_DESKTOP))
    } else {
      setVisibleMoviesList(MoviesList.slice(0, visibleMoviesList.length + ELSE_MOVIES_MOBILE))
    }
    checkStatusButtonElseMovies();
  }



  return (
    <section className="movies">
      <SearchForm
        handleSetStatusCheckbox={handleSetStatusCheckbox}
        handleSetSearch={handleSetSearch}
        statusCheckbox={statusCheckbox}
        searchedStatusStorage={searchedStatusStorage}
      />
      <MoviesCardList
        moviesList={visibleMoviesList}
        isLoading={isLoading}
        handleAddMovie={handleAddMovie}
        handleDeleteMovie={handleDeleteMovie}
        userMoviesList={UserMoviesList}
        handleElseMovies={handleElseMovies}
        buttonElseMovies={buttonElseMovies}
        savedPage={false}
      />
    </section>
  )
};

export default Movies;