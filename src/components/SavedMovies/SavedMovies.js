import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { InitialMovies } from '../../utils/InitialMovies';

function SavedMovies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList moviesList={InitialMovies} filter={true} />
    </section>
  )
};

export default SavedMovies;