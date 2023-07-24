import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function SearchForm(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSearch(e) {
    e.preventDefault();
    props.handleSetSearch(values.searchFilm ?? props.searchedStatusStorage);
  }

  return (
    <div className="search-bar">
      <span className="search-form__input-span-error-active"
        id="search-form__input-span-error-active">
        {errors.searchFilm && 'Нужно ввести ключевое слово'}
      </span>
      <form className="search-form" onSubmit={handleSearch} >
        <input type="text"
          className="search-form__input"
          placeholder="Фильм"
          name="searchFilm"
          required
          value={values.searchFilm ?? props.searchedStatusStorage ?? ''}
          onChange={handleChange} />

        <button className={`search-form__button ${!isValid && 'search-form__button_disabled'}`}
          type="submit"
          aria-label="Поиск фильма"
          disabled={!isValid || ''} />
      </form>

      <FilterCheckbox statusCheckbox={props.statusCheckbox} handleSetStatusCheckbox={props.handleSetStatusCheckbox} />

    </div>

  )
};

// Нужно ввести ключевое слово».

export default SearchForm;