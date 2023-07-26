import './Login.css';
import { Link } from "react-router-dom";
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.signIn(values.userPassword, values.userEmail);
  }

  return (
    <section className="login">
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__form-label" htmlFor="email-input">E-mail</label>
        <input type="email" className={`login__form-input ${errors.userEmail && 'login__form-input_error'}`} name="userEmail" required placeholder="Email" value={values.userEmail ?? ''} onChange={handleChange} />
        <span className="login__form-input-span-error-active" id="login__form-input-span-error-active">{errors.userEmail}</span>
        <label className="login__form-label" htmlFor="password-input">Пароль</label>
        <input type="password" className={`login__form-input ${errors.userPassword && 'login__form-input_error'}`} name="userPassword" required placeholder="Пароль" value={values.userPassword ?? ''} onChange={handleChange} />
        <span className="login__form-input-span-error-active" id="login__form-input-span-error-active">{errors.userPassword}</span>

        <span className="login__form-status">{props.statusMessage ?? '  '}</span>
        <button className={`login__form-submit ${!isValid && 'login__form-submit_disabled'}`} type="submit" aria-label="Зарегистрироваться" disabled={!isValid || ''}>Войти</button>
      </form>
      <p className="login__footer">Ещё не зарегистрированы?
        <Link className="login__footer-link" to="/signup">
          Регистрация
        </Link></p>
    </section>
  )
};

export default Login;