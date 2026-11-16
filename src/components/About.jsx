import "../styles/about.css";

import {
  ArrowUpRight,
  Building2,
  ShieldCheck,
  Lightbulb,
  Target,
} from "lucide-react";

function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-visual-content">
            <span className="about-visual-label">ZOBOT RESOURCES LIMITED</span>
            <Building2 size={75} strokeWidth={1.2} />
            <h3>Building Solutions. Creating Impact.</h3>
            <p>
              Energy, engineering and infrastructure solutions
              for a changing world.
            </p>
          </div>

          <div className="about-accent-box">
            <span>OUR COMMITMENT</span>
            <strong>Quality. Reliability. Excellence.</strong>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">WHO WE ARE</span>

          <h2>
            Driving Progress Through
            <span> Engineering & Innovation</span>
          </h2>

          <p>
            Zobot Resources Limited is an indigenous Nigerian company
            providing solutions across the energy, engineering and
            infrastructure sectors.
          </p>

          <p>
            We are committed to delivering dependable services that
            support businesses, industries and communities. Through
            technical expertise, practical solutions and a focus on
            quality, we aim to contribute to sustainable development
            and long-term value.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-icon">
                <ShieldCheck size={23} />
              </div>
              <div>
                <h4>Quality & Reliability</h4>
                <p>We prioritise dependable service and quality delivery.</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <Lightbulb size={23} />
              </div>
              <div>
                <h4>Practical Innovation</h4>
                <p>We pursue effective solutions to real-world challenges.</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <Target size={23} />
              </div>
              <div>
                <h4>Client-Focused Delivery</h4>
                <p>We work towards solutions that meet client needs.</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="about-link">
            Learn More About Us <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
