import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="search-bar">
      <form className="search-form" >
        <input type="text" className="search-form__input" placeholder="Фильм" name="searchFilm" onSubmit={handleSubmit} />
        <button className="search-form__button" type="button" aria-label="Поиск фильма" />
      </form>
      <FilterCheckbox />
    </div>
  )
};

export default SearchForm;