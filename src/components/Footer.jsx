export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-top">
          <h3>Orbit Studio</h3>
          <p>
            Designing structured digital systems for ambitious teams.
          </p>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-meta">
            <span>© {new Date().getFullYear()} Orbit Studio</span>
          </div>
        </div>

      </div>
    </footer>
  );
}