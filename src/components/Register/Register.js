import './Register.css';

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
        <input type="text" className="register__form-input" name="profileName" required placeholder="Имя" />
        <span className="register__form-input-span-error-active" id="register__form-input-span-error-active"></span>
        <label className="register__form-label" htmlFor="email-input">E-mail</label>
        <input type="text" className="register__form-input" name="profilEmail" required placeholder="Email"/>
        <span className="register__form-input-span-error-active" id="register__form-input-span-error-active"></span>
        <label className="register__form-label" htmlFor="email-input">Пароль</label>
        <input type="password" className="register__form-input" name="profilPassword" placeholder="Пароль"/>
        <span className="register__form-input-span-error-active" id="register__form-input-span-error-active">Что-то пошло не так...</span>
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