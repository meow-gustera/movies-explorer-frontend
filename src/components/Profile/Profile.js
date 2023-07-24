import './Profile.css';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile(props) {
  const [statusForm, setStatusForm] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, } = useFormWithValidation();

  const checkChanges = () => {
    const checkName = values.userName == currentUser.name;
    const checkEmail = values.userEmail == currentUser.email;

    return checkName || checkEmail;
  }

  useEffect(() => {
    const isChanged = checkChanges();
    if (!props.isLoading && !isChanged && isValid ) {
      setStatusForm(true);
      console.log(props.isLoading)
    } else {
      setStatusForm(false);
      console.log(props.isLoading)
    }
  }, [values.userName, values.userEmail])

  function handleSubmit(e) {
    e.preventDefault();
    setStatusForm(false);
    props.setIsLoading(true);

    props.updateUserData({
      name: values.userName ?? currentUser.name,
      email: values.userEmail ?? currentUser.email
    })

  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form" name="profileChange" onSubmit={handleSubmit}>
        <div className="profile__form-element">
          <label className="profile__form-label" htmlFor="name-input">Имя</label>
          <input type="text"
            className={`profile__form-input ${errors.userName && 'profile__form-input_error'}`}
            placeholder="Имя"
            name="userName"
            onChange={handleChange}
            value={values.userName ?? currentUser.name}
            required
            minLength={2}
            maxLength={30}
            readonly={props.isLoading && ''} />
        </div>
        <div className="profile__form-element">
          <label className="profile__form-label" htmlFor="email-input" >Email</label>
          <input type="email"
            className={`profile__form-input ${errors.userEmail && 'profile__form-input_error'}`}
            name="userEmail"
            placeholder="Email"
            onChange={handleChange}
            value={values.userEmail ?? currentUser.email}
            required
            readonly={props.isLoading && ''} />
        </div>
        <span className="profile__form-status">{props.statusMessage ?? '  '}</span>
        <button className={`profile__form-submit ${!statusForm && 'profile__form-submit_disabled'}`}
          type="submit"
          aria-label="Редактировать профиль"
          disabled={!statusForm || ''}>Редактировать</button>
      </form>
      <Link to="/" className="profile__sing-out" onClick={props.signOut}>Выйти из аккаунта</Link>
    </section>
  )
};

export default Profile;