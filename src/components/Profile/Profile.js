import './Profile.css';
import { Link } from "react-router-dom";

function Profile() {
  const userName = "Виталий"
  const userEmail = "Виталий"

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {userName}!</h2>
      <form className="profile__form" name="profileChange" onSubmit={handleSubmit}>
        <div className="profile__form-element">
          <label className="profile__form-label" htmlFor="name-input">Имя</label>
          <input type="text" className="profile__form-input" placeholder="Имя" name="profileName" />
        </div>
        <div className="profile__form-element">
          <label className="profile__form-label" htmlFor="email-input" >Email</label>
          <input type="text" className="profile__form-input" name="profileEmail" placeholder="Email" />
        </div>
        <button className="profile__form-submit" type="submit" aria-label="Редактировать профиль">Редактировать</button>
      </form>
      <Link to="/" className="profile__sing-out">Выйти из аккаунта</Link>
    </section>
  )
};

export default Profile;