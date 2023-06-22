import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="https://github.com/meow-gustera/how-to-learn" target="_blank" rel="noreferrer">
            <p className="portfolio__item-name">Статичный сайт</p>
            <p className="portfolio__item-symbol">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="https://github.com/meow-gustera/russian-travel" target="_blank" rel="noreferrer">
            <p className="portfolio__item-name">Адаптивный сайт</p>
            <p className="portfolio__item-symbol">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="https://github.com/meow-gustera/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
            <p className="portfolio__item-name">Одностраничное приложение</p>
            <p className="portfolio__item-symbol">↗</p>
          </a>
        </li>
      </ul>
    </section>
  )
};

export default Portfolio;