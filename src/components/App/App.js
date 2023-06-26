import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound.js';

import './App.css';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="page">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={< Main />} />
          <Route path="/movies" element={< Movies />} />
          <Route path="/saved-movies" element={< SavedMovies />} />
          <Route path="/profile" element={< Profile />} />
          <Route path="/signin" element={< Login />} />
          <Route path="/signup" element={< Register />} />
          <Route path="/*" element={< NotFound />} />
        </Routes>
      </main>
      {pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" ? (
        <Footer />
      ) : null}
      
    </div>
  );
}

export default App;

