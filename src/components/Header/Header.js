import './Header.css';
import { Link, useLocation } from "react-router-dom";
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const { pathname } = useLocation();
  const authUrl = pathname === "/signup" || pathname === "/signin";

  return (
    <header className={`header ${authUrl ? "header_auth" : ""}`}>
      <Link to="/"><img className="header__logo header__logo_main" src={logo} alt="Logo" /></Link>
      {!authUrl ? <Navigation loggedIn={loggedIn} /> : null}
    </header>
  )
};

export default Header;