import './Register.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.signUp(values.userName, values.userPassword, values.userEmail);
  }

  return (
    <section className="register">
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <label className="register__form-label" htmlFor="name-input">Имя</label>
        <input type="text"
          className={`register__form-input ${errors.userName && 'register__form-input_error'}`}
          name="userName"
          required
          placeholder="Имя"
          value={values.userName ?? ''}
          onChange={handleChange}
          id="userName"
          minLength={2}
          maxLength={30} />
        <span className="register__form-input-span-error-active" id="register__form-input-span-error-active">{errors.userName}</span>
        <label className="register__form-label" htmlFor="email-input">E-mail</label>
        <input type="email"
          id="userEmail"
          className={`register__form-input ${errors.userEmail && 'register__form-input_error'}`}
          name="userEmail"
          required
          placeholder="Email"
          value={values.userEmail ?? ''}
          onChange={handleChange} />
        <span className="register__form-input-span-error-active" id="register__form-input-span-error-active">{errors.userEmail}</span>
        <label className="register__form-label" htmlFor="email-input">Пароль</label>
        <input type="password"
          id="userPassword"
          className={`register__form-input ${errors.userPassword && 'register__form-input_error'}`}
          name="userPassword"
          required
          placeholder="Пароль"
          value={values.userPassword ?? ''}
          onChange={handleChange} />
        <span className="register__form-input-span-error-active" id="register__form-input-span-error-active">{errors.userPassword}</span>
        <span className="register__form-status">{props.statusMessage ?? '  '}</span>
        <button className={`register__form-submit ${!isValid && 'register__form-submit_disabled'}`}
          type="submit"
          aria-label="Зарегистрироваться"
          disabled={!isValid || ''}>Зарегистрироваться</button>
      </form>
      <p className="register__footer">Уже зарегистрированы?
        <Link className="register__footer-link" to="/signin">
          Войти
        </Link></p>
    </section>
  )
};

export default Register;