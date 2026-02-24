import heroBg from "../assets/hero-bg.jpg";

function Hero() {
  return (
    <section
    id="hero"
    className="hero"
    style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container hero-content">
        <span className="hero-badge">
          Digital Strategy · UX/UI · Development
        </span>

        <h1>
          We build digital experiences that drive measurable business growth.
        </h1>

        <p>
          Orbit Studio partners with ambitious brands to design, develop and
          scale high-performance digital products focused on long-term impact.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;