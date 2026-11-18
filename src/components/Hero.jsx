
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Zap,
  Building2,
} from "lucide-react";

import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">

          <div className="hero-text">
            <span className="hero-tag">
              <span className="hero-tag-line"></span>
              ENGINEERING EXCELLENCE
              <span className="hero-tag-dot">•</span>
              ENERGY SOLUTIONS
            </span>

            <h1>
              Powering Progress.
              <span>Engineering the Future.</span>
            </h1>

            <p className="hero-description">
              Delivering reliable energy, engineering and infrastructure
              solutions that drive industries forward and create lasting value.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">
                Explore Our Services
                <ArrowRight size={18} />
              </a>

              <a href="#about" className="btn btn-outline">
                <Play size={16} />
                Discover Zobot
              </a>
            </div>
          </div>

          <div className="hero-stats">

            <div className="hero-stat">
              <div className="hero-stat-icon">
                <Zap size={21} />
              </div>

              <div className="hero-stat-text">
                <strong>Energy</strong>
                <span>Reliable Solutions</span>
              </div>
            </div>

            <div className="hero-stat">
              <div className="hero-stat-icon">
                <ShieldCheck size={21} />
              </div>

              <div className="hero-stat-text">
                <strong>Engineering</strong>
                <span>Technical Excellence</span>
              </div>
            </div>

            <div className="hero-stat">
              <div className="hero-stat-icon">
                <Building2 size={21} />
              </div>

              <div className="hero-stat-text">
                <strong>Infrastructure</strong>
                <span>Building Progress</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="hero-bottom-line"></div>
    </section>
  );
}

export default Hero;
