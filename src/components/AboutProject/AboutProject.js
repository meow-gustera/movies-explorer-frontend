import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="AboutProject">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__articles">
        <article className="about-project__article">
          <h3 className="about-project__article-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__article-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article >
        <article className="about-project__article">
          <h3 className="about-project__article-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__article-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article >
      </div>
      <div className="about-project__deadline">
        <div className="week1">
          <p className="week1-time">1 неделя</p>
          <p className="week1-description">Back-end</p>
        </div>
        <div className="week4">
          <p className="week4-time">4 недели</p>
          <p className="week4-description">Front-end</p>
        </div>
      </div>
    </section>
  )
};

export default AboutProject;