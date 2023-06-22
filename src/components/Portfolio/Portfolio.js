import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="https://github.com/meow-gustera/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт</a>
          <p className="portfolio__item-symbol">↗</p>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="https://github.com/meow-gustera/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          <p className="portfolio__item-symbol">↗</p>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="https://github.com/meow-gustera/react-mesto-api-full-gha" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          <p className="portfolio__item-symbol">↗</p>
        </li>
      </ul>
    </section>
  )
};

export default Portfolio;