import MoviesCard from '../MoviesCard/MoviesCard';

function CheckFilter({ moviesList, handleDeleteMovie, userMoviesList, handleAddMovie, savedPage }) {
  return (
    moviesList.map((movie, i) => (
      <MoviesCard movie={movie} key={i} handleDeleteMovie={handleDeleteMovie} userMoviesList={userMoviesList} handleAddMovie={handleAddMovie} savedPage={savedPage} />
    ))
  )
}

export default CheckFilter;