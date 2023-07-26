import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { useUserMovies } from '../../hooks/useUserMovies';

function SavedMovies() {
  const {
    handleDeleteMovie,
    UserMoviesList,
    handleSetSearch,
    handleSetStatusCheckbox,
    statusCheckbox,
    isLoading,
    // checkedStatusCheckbox,
    // searchedStatusStorage,
    MoviesListVisible
  } = useUserMovies();


  return (
    <section className="movies">
      <SearchForm
        handleSetStatusCheckbox={handleSetStatusCheckbox}
        handleSetSearch={handleSetSearch}
        statusCheckbox={statusCheckbox}
      />
      <MoviesCardList
        moviesList={MoviesListVisible}
        savedPage={true}
        handleDeleteMovie={handleDeleteMovie}
        isLoading={isLoading}
        userMoviesList={UserMoviesList}
      />
    </section>
  )
};

export default SavedMovies;