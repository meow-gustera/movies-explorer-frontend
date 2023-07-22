import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function SearchForm(props) {
  const { values, handleChange } = useFormWithValidation();

  function handleSearch(e) {
    e.preventDefault();
    props.handleSetSearch(values.searchFilm ?? props.searchedStatusStorage);
  }

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleSearch} >
        <input type="text"
          className="search-form__input"
          placeholder="Фильм"
          name="searchFilm"
          required
          value={values.searchFilm ?? props.searchedStatusStorage ?? ''}
          onChange={handleChange} />
        <button className="search-form__button" type="submit" aria-label="Поиск фильма" />
      </form>
      <FilterCheckbox statusCheckbox={props.statusCheckbox} handleSetStatusCheckbox={props.handleSetStatusCheckbox} />
    </div>
  )
};

export default SearchForm;