import './FilterCheckbox.css';

function FilterCheckbox({ statusCheckbox, handleSetStatusCheckbox }) {
  return (
    <div className="filter">
      <p className="filter__title">Короткометражки</p>
      <div className={`filter__checkbox ${statusCheckbox ? 'filter__checkbox_active' : ''}`} onClick={handleSetStatusCheckbox}></div>
    </div>
  )
};

export default FilterCheckbox;