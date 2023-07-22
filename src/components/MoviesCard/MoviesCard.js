import './MoviesCard.css';
import { useState, useEffect } from 'react';

function MoviesCard({ movie, userMoviesList, handleDeleteMovie, handleAddMovie, savedPage }) {
  const { nameRU, duration, image, trailerLink } = movie;
  const [isSaved, setIsSaved] = useState(false);
  const [id, setId] = useState('')

  function minutesToHours(duration) {
    const hours = Math.round(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`
  }

  const checkIsSaved = userMoviesList.find((userMovie) => {
    return userMovie.movieId === movie.id;
  });

  const checkId = () => userMoviesList.forEach((userMovie) => {
    if (userMovie.movieId === movie.id) {
      setId(userMovie._id);
    }
  })

  useEffect(() => {
    setIsSaved(checkIsSaved);
    checkId();
  }, [handleAddMovie, handleDeleteMovie, userMoviesList])

  return (
    <li className="movie-item">
      <a href={trailerLink} className="movie-item__trailer-link" target="_blank" rel="noreferrer">
        <img src={savedPage ? image : `https://api.nomoreparties.co/${image.url}`} className="movie-item__image" alt={nameRU} />
        <div className="movie-item__description">
          <p className="movie-item__name">{nameRU} </p>
          <p className="movie-item__duration">{minutesToHours(duration)} </p>
        </div>
      </a>
      {
        savedPage
          ? <button className="movie-item__saved-delete"
            type="button "
            aria-label="Удаление фильма из сохраненных"
            onClick={() => handleDeleteMovie(movie._id)} />
          : (
            isSaved
              ? <button className="movie-item__check-mark"
                type="button "
                aria-label="Сохраненный фильм"
                onClick={() => handleDeleteMovie(id)} />
              : <button className="movie-item__save-mark"
                type="button "
                aria-label="Сохранить фильм"
                onClick={() => handleAddMovie(movie)} />
          )
      }
    </li>
  )
};

export default MoviesCard;

