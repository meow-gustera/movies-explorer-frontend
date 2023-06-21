import './Navigation.css';
import { Link, useLocation } from "react-router-dom";
import profile from '../../images/profile.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import menu from '../../images/burgermenu.svg';
import { useState } from 'react';


function Navigation() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }

  const mainPage = pathname === "/";

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
          <img className="header__nav-menu header__nav-menu" src={menu} alt="Меню" onClick={openMenu} />
          <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </nav>

        <nav className="header__navigation">


          <div className="header__navigation-links">
            <Link className="header__navigation-link" to="/movies">Фильмы</Link>
            <Link className="header__navigation-link" to="/saved-movies">Сохранённые фильмы</Link>
          </div>
          <Link to="/profile"><img className="header__profile" src={profile} alt="Переход в аккаунт" /></Link>
        </nav>
      </>
    )
  }



  return (
    mainPage ? renderMainPage() : renderLoggedPage()
  )
};

export default Navigation;