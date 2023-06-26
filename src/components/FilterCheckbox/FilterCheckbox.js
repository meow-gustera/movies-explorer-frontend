import './FilterCheckbox.css';
import { useState } from "react";

function FilterCheckbox() {
  const [statusCheckbox, setStatusCheckbox] = useState(false);

  function toggleStatusCheckbox() {
    if(statusCheckbox) {
      setStatusCheckbox(false);
    } else {
      setStatusCheckbox(true);
    }
  }

  return (
    <div className="filter">
      <p className="filter__title">Короткометражки</p>
      <div className={`filter__checkbox ${statusCheckbox ? "" : 'filter__checkbox_active'}`} onClick={toggleStatusCheckbox}></div>
    </div>
  )
};

export default FilterCheckbox;