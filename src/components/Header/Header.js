import './Header.css';
import { Link, useLocation } from "react-router-dom";
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';

function Header() {
  const { pathname } = useLocation();
  const loggedUrls = pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile" || pathname === "/"

  return (
    <header className="header">
      <Link to="/"><img className="header__logo header__logo_main" src={logo} alt="Logo" /></Link>
      {loggedUrls ? <Navigation /> : null}
    </header>
  )
};

export default Header;