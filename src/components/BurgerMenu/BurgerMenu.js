import './BurgerMenu.css';
// import closeMenu from '../../images/closeMenu.svg';
import { NavLink, Link } from "react-router-dom";
import profile from '../../images/profile.svg';

function BurgerMenu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? "" : 'menu_closed'}`}>
      <button className="menu__close-button" onClick={onClose} ></button>
      <nav className="menu__links">
        <NavLink className="menu__link" to="/" onClick={onClose}>Главная</NavLink>
        <NavLink className="menu__link" to="/movies" onClick={onClose}>Фильмы</NavLink>
        <NavLink className="menu__link" to="/saved-movies" onClick={onClose}>Сохранённые фильмы</NavLink>
      </nav>
      <Link to="/profile"><img className="menu__profile" src={profile} alt="Переход в аккаунт" /></Link>
    </div>
  )
}

export default BurgerMenu;
