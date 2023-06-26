import MoviesCard from '../MoviesCard/MoviesCard';

function CheckFilter({ filter, moviesList }) {
  if (filter) {
    const filterMovieList = moviesList.filter((movie) => movie.isSaved);

    return (
      filterMovieList.map((movie, i) => (
        <MoviesCard movie={movie} key={i} filter={true} />
      ))
    )
  } else {
    return (
      moviesList.map((movie, i) => (
        <MoviesCard movie={movie} key={i} filter={false} />
      ))
    )
  }
}

export default CheckFilter;