import './NotFound.css';

function NotFound({ navigate, loggedIn }) {

  function linkBack() {
    loggedIn ? navigate(-2) : navigate(-1)
  };

  return (
    <section className="error404">
      <h1 className="error404__title">404</h1>
      <p className="error404__description">Страница не найдена</p>
      <button onClick={() => { linkBack() }} className="error404__button-back">Назад</button>
    </section>
  )
}

export default NotFound;