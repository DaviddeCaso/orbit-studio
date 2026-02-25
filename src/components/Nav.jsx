import { useEffect, useState } from "react";

function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <ul>
        <li><a href="#hero" className={active === "hero" ? "active" : ""}>Home</a></li>
        <li><a href="#services" className={active === "services" ? "active" : ""}>Services</a></li>
        <li><a href="#process" className={active === "process" ? "active" : ""}>Process</a></li>
        <li><a href="#projects" className={active === "projects" ? "active" : ""}>Work</a></li>
        <li><a href="#about" className={active === "about" ? "active" : ""}>About</a></li>
        <li><a href="#contact" className={`nav-cta ${active === "contact" ? "active" : ""}`}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;