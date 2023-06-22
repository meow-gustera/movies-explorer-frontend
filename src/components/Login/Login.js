import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className ="login">
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" onSubmit={handleSubmit}> 
        <label className="login__form-label" htmlFor="email-input">E-mail</label>
        <input type="text" className="login__form-input" name="profilEmail"required placeholder="Email" />
        <span className="login__form-input-span-error-active" id="login__form-input-span-error-active"></span>
        <label className="login__form-label" htmlFor="email-input">Пароль</label>
        <input type="password" className="login__form-input" name="profilPassword" required placeholder="Пароль" />
        <span className="login__form-input-span-error-active" id="login__form-input-span-error-active"></span>
        <button className="login__form-submit" type="submit" aria-label="Зарегистрироваться">Войти</button>
      </form>
      <p className="login__footer">Ещё не зарегистрированы?  
        <Link className="login__footer-link" to="/signup">
          Регистрация
      </Link></p>
    </section>
  )
};

export default Login;