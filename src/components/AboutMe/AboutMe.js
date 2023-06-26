import './AboutMe.css';
import photo from "../../images/photo.svg"

function AboutMe() {
  return (
    <section className="about" id="student">
      <h2 className="about__title">Студент</h2>
      <div className="about__container">
        <div className="about__content">
          <h3 className="about__name">Виталий</h3>
          <p className="about__profile">Фронтенд-разработчик, 30 лет</p>
          <p className="about__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="about__url" href="https://github.com/meow-gustera/" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="about__photo" src={photo} alt="Фото профиля" />
      </div>
    </section>
  )
};

export default AboutMe;