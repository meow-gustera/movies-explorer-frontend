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
  const [isLoading, setIsLoading] = useState(false);

  function errCheck(err) {
    if (err.status) {
      err.json()
        .then((res) => {
          setStatusMessage(res.message)
        })
    } else {
      setStatusMessage('Ошибка соединения');
    }
  }

  function signUp(name, password, email) {
    mainApi.signUp(name, password, email)
      .then((res) => {
        signIn(password, email);
        console.log(res)
        setStatusMessage('Вы зарегистрированы')
      })
      .catch((err) => {
        errCheck(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function signIn(password, email) {
    mainApi.signIn(password, email)
      .then(() => {
        mainApi.getAuth();
        console.log(isLoading)
      })
      .then((user) => {
        setUserInfo(user);
        setLoggedIn(true);
        console.log(isLoading);

      })
      .catch((err) => {
        errCheck(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        console.log(isLoading)
        setStatusMessage('Данные успешно обновлены')
      })
      .catch((err) => {
        errCheck(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

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
                isLoading={isLoading}
                setIsLoading={setIsLoading}
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

            <Route path="/*" element={< NotFound loggedIn={loggedIn} navigate={navigate} />} />
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

