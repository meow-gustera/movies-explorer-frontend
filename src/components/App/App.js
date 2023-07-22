import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound.js';
import { useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import { Navigate } from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import './App.css';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [currentUser, setUserInfo] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [statusMessage, setStatusMessage] = useState(' ');

  function signUp(name, password, email) {
    console.log('+')
    mainApi.signUp(name, password, email)

      .then((res) => {
        signIn(password, email);
        console.log(res)
        setStatusMessage('Вы зарегистрированы')
      })
      .catch((err) => {
        err.json()
          .then((res) => {
            //Передает message с бэкенда
            setStatusMessage(res.message)
          })
      })
  }

  function signIn(password, email) {
    mainApi.signIn(password, email)
      .then(() => {
        mainApi.getAuth();
      })
      .then((user) => {
        setUserInfo(user);
        setLoggedIn(true);

      })
      .catch((err) => {
        err.json()
          .then((res) => {
            setStatusMessage(res.message)
          })
      })
  }

  function signOut() {
    mainApi.signOut()
      .then(() => {
        console.log(loggedIn)
        setLoggedIn(false);
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function updateUserData(user) {
    mainApi.editProfile(user.name, user.email)
      .then((user) => {
        setUserInfo(user);
        setStatusMessage('Данные успешно обновлены')
      })
      .catch((err) => {
        err.json()
          .then((res) => {
            setStatusMessage(res.message)
          })
      }
      )
  }

  useEffect(() => {
    mainApi.getAuth()
      .then((user) => {
        if (user) {
          navigate(pathname);
          setLoggedIn(true);
          setUserInfo(user);
        } else {
          setLoggedIn(false);
          console.log(loggedIn);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(loggedIn);
      })

  }, [loggedIn]);

  useEffect(() => {
    setStatusMessage('');
  }, [pathname]);

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">
        <Header loggedIn={loggedIn} />
        <main className="content">
          <Routes>
            <Route path="/" element={< Main />} />

            <Route path="/movies" element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
              />}
            />

            <Route path="/saved-movies" element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
              />}
            />

            <Route exact path="/profile" element={
              <ProtectedRoute
                element={Profile}
                signOut={signOut}
                updateUserData={updateUserData}
                loggedIn={loggedIn}
                statusMessage={statusMessage}
              />}
            />

            <Route path="/signin" element={
              loggedIn
                ? <Navigate to="/movies" replace />
                : < Login signIn={signIn} statusMessage={statusMessage} />}
            />

            <Route path="/signup" element={
              loggedIn
                ? <Navigate to="/movies" replace />
                : < Register signUp={signUp} statusMessage={statusMessage} />}
            />

            <Route path="/*" element={< NotFound />} />
          </Routes>
        </main>
        {pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" ? (
          <Footer />
        ) : null}

      </div>
    </CurrentUserContext.Provider>
  );
}


export default App;

