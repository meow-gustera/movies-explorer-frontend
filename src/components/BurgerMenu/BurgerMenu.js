import './BurgerMenu.css';
import { NavLink, Link, useLocation } from "react-router-dom";
import profile from '../../images/profile.svg';

function BurgerMenu({ isOpen, onClose }) {
  const { pathname } = useLocation();

  return (
    <div className={`menu ${isOpen ? "" : 'menu_closed'}`}>
      <button className="menu__close-button" onClick={onClose} ></button>
      <nav className="menu__links">

        
        <NavLink className={`menu__link ${pathname === '/' && 'menu__link_active'}`} to="/" onClick={onClose}>Главная</NavLink>
        <NavLink className={`menu__link ${pathname === '/movies' && 'menu__link_active'}`} to="/movies" onClick={onClose}>Фильмы</NavLink>
        <NavLink className={`menu__link ${pathname === '/saved-movies' && 'menu__link_active'}`} to="/saved-movies" onClick={onClose} >Сохранённые фильмы</NavLink>
      </nav>
      <Link to="/profile"><img className="menu__profile" src={profile} alt="Переход в аккаунт" onClick={onClose} /></Link>
    </div>
  )
}

export default BurgerMenu;
