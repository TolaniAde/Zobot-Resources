
import { ArrowRight, Play } from "lucide-react";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-tag">
            ENGINEERING EXCELLENCE • ENERGY SOLUTIONS
          </span>

          <h1>
            Powering Progress.
            <br />
            <span>Engineering the Future.</span>
          </h1>

          <p>
            Delivering reliable energy, engineering and infrastructure
            solutions that drive industries forward and create lasting value.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Explore Our Services <ArrowRight size={18} />
            </a>

            <a href="#about" className="btn btn-outline">
              <Play size={16} /> Discover Zobot
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>Energy</strong>
              <span>Reliable Solutions</span>
            </div>
            <div>
              <strong>Engineering</strong>
              <span>Technical Excellence</span>
            </div>
            <div>
              <strong>Infrastructure</strong>
              <span>Building Progress</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-line"></div>
    </section>
  );
}

export default Hero;
