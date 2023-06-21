import './MoviesCard.css';

function MoviesCard({ movie, filter }) {
  const { isSaved, nameRU, image, duration } = movie;

  return (
    <li className="movie-item">
      <img src={image} className="movie-item__image" alt={nameRU} />
      <div className="movie-item__description">
        <p className="movie-item__name">{nameRU} </p>
        <p className="movie-item__duration">{duration} </p>
      </div>
      {filter
        ? <button className="movie-item__saved-delete" />
        : (isSaved
          ? <button className="movie-item__check-mark" />
          : <button className="movie-item__save-mark" />
        )
      }
    </li>
  )
};

export default MoviesCard;

