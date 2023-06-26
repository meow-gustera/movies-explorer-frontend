import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name-project">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__block">
        <p className="footer__copyright">&copy;	2023</p>
        <nav className="footer__nav">
          <a href="https://practicum.yandex.ru/" className="footer__nav-link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a href="https://github.com/meow-gustera" className="footer__nav-link" target="_blank" rel="noreferrer">Github</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;