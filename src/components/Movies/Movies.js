import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { InitialMovies } from '../../utils/InitialMovies';

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList moviesList={InitialMovies} filter={false} />
    </section>
  )
};

export default Movies;