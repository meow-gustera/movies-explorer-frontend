import MoviesCard from '../MoviesCard/MoviesCard';

function CheckFilter({ moviesList, handleDeleteMovie, userMoviesList, handleAddMovie, savedPage }) {
  console.log(moviesList)
  return (
    moviesList.map((movie) => (
      <MoviesCard movie={movie} key={movie.id} handleDeleteMovie={handleDeleteMovie} userMoviesList={userMoviesList} handleAddMovie={handleAddMovie} savedPage={savedPage} />
    ))
  )
}

export default CheckFilter;