import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import CheckFilter from '../CheckFilter/CheckFilter.js';

function MoviesCardList({ isLoading, moviesList, handleAddMovie, handleDeleteMovie, handleElseMovies, buttonElseMovies, savedPage, userMoviesList }) {
  function renderMoviesList(moviesList) {
    if (moviesList.length > 0) {
      return (
        <>
          <ul className="movies__list-item">
            <CheckFilter moviesList={moviesList} handleAddMovie={handleAddMovie} handleDeleteMovie={handleDeleteMovie} userMoviesList={userMoviesList} savedPage={savedPage} />
          </ul>
          {!savedPage && <button className={`movies__list-button ${buttonElseMovies && 'movies__list-button_disabled'}`} onClick={handleElseMovies} >Ещё</button>
          }
        </>
      )
    }
    //Передан пустой объект с фильмами - либо ничего не найдено, либо поиска не было
    else if (moviesList.length === 0 && !savedPage) {
      return (
        <>
          {localStorage.getItem('searchedWord') || localStorage.getItem('checkedStatusCheckbox')
            ? (<p className="movies__error-message">Ничего не найдено.</p>)
            : ('')
          }
        </>)
    }
    else if (moviesList.length === 0 && savedPage) {
      return (
        <>
          <p className="movies__error-message">Ничего не найдено.</p>
        </>
      )
    }
    //Во всех остальных случаях ошибка
    else {
      return (
        <p className="movies__error-message">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
      )
    }
  }

  return (
    <div className="movies__list">
      {isLoading ? <Preloader /> : (
        renderMoviesList(moviesList)
      )}
    </div>
  )
};

export default MoviesCardList;