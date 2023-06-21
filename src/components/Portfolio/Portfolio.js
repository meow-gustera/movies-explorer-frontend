import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="/">Статичный сайт</a>
          <p className="portfolio__item-symbol">↗</p>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="/">Адаптивный сайт</a>
          <p className="portfolio__item-symbol">↗</p>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="/">Одностраничное приложение</a>
          <p className="portfolio__item-symbol">↗</p>
        </li>
      </ul>
    </section>
  )
};

export default Portfolio;