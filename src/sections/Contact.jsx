function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-content">
        <div className="contact-header">
          <span className="section-label">Get in Touch</span>
          <h2>Let’s build something impactful together.</h2>
          <p>
            Whether you’re launching a new product or optimizing an existing
            platform, we’d love to explore how we can help.
          </p>
        </div>

        <div className="contact-cta">
          <a href="mailto:hello@orbitstudio.com" className="btn-primary">
            hello@orbitstudio.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;