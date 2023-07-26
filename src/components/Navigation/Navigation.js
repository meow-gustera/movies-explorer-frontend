import './Navigation.css';
import { Link, useLocation } from "react-router-dom";
import profile from '../../images/profile.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import menu from '../../images/burgermenu.svg';
import { useState } from 'react';

function Navigation({ loggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  function openMenu() {
    setIsMenuOpen(true);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }

  const renderMainPage = () => {
    return (
      <nav className="header__profile">
        <Link to="/signup" className="header__profile-link header__profile-link_signup">Регистрация</Link>
        <Link to="/signin" className="header__profile-link header__profile-link_signin">Войти</Link>
      </nav>
    )
  }

  const renderLoggedPage = () => {
    return (
      <>
        <nav className="header__navigation-menu">
          <img className="header__nav-menu header__nav-menu_button" src={menu} alt="Меню" onClick={openMenu} />
          <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </nav>

        <nav className="header__navigation">
          <div className="header__navigation-links">

            <Link className={`header__navigation-link ${pathname === '/movies' && 'header__navigation-link_active'}`}
              to="/movies">Фильмы</Link>
            <Link className={`header__navigation-link ${pathname === '/saved-movies' && 'header__navigation-link_active'}`}
              to="/saved-movies">Сохранённые фильмы</Link>
          </div>
          <Link to="/profile"><img className="header__profile" src={profile} alt="Переход в аккаунт" /></Link>
        </nav>
      </>
    )
  }

  return (
    !loggedIn ? renderMainPage() : renderLoggedPage()
  )
};

export default Navigation;