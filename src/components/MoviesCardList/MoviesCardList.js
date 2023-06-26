import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import CheckFilter from '../CheckFilter/CheckFilter.js';

function MoviesCardList({ isLoading = false, moviesList, filter }) {
  return (
    <div className="movies__list">
      {isLoading ? <Preloader /> : (
        <>
          <ul className="movies__list-item">
            <CheckFilter filter={filter} moviesList={moviesList} />
          </ul>
          <button className="movies__list-button">Ещё</button>
        </>
      )}
    </div>
  )
};

export default MoviesCardList;