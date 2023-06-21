import './Register.css';
import { useState, useContext } from 'react';

import { Link } from "react-router-dom";

function Register() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="register">
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__form-label" htmlFor="name-input">Имя</label>
        <input type="text" className="register__form-input" name="profileName" required />
        <span className="register__form-input-span-error-active" id="popup__input_data_description-error"></span>
        <label className="register__form-label" htmlFor="email-input">E-mail</label>
        <input type="text" className="register__form-input" name="profilEmail" required />
        <label className="register__form-label" htmlFor="email-input">Пароль</label>
        <input type="password" className="register__form-input" name="profilPassword" />
        <button className="register__form-submit" type="submit" aria-label="Зарегистрироваться">Зарегистрироваться</button>
      </form>
      <p className="register__footer">Уже зарегистрированы?
        <Link className="register__footer-link" to="/signin">
          Войти
        </Link></p>
    </section>
  )
};

export default Register;