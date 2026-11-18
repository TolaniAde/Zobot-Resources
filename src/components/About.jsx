
import { useEffect, useRef } from "react";
import "../styles/about.css";

import {
  ArrowUpRight,
  Building2,
  ShieldCheck,
  Lightbulb,
  Target,
  ArrowRight,
} from "lucide-react";

function About() {
  const sectionRef = useRef(null);

  // Scroll-triggered reveal animation
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(".about-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="about-section section-padding"
      id="about"
      ref={sectionRef}
    >
      <div className="container about-grid">

        {/* LEFT VISUAL PANEL */}
        <div className="about-visual about-reveal reveal-left">

          <div className="about-orb about-orb-one"></div>
          <div className="about-orb about-orb-two"></div>
          <div className="about-grid-pattern"></div>

          <div className="about-visual-content">
            <span className="about-visual-label">
              ZOBOT RESOURCES LIMITED
            </span>

            <div className="about-main-icon">
              <Building2 size={76} strokeWidth={1.3} />
            </div>

            <h3>
              Building Solutions.
              <span>Creating Impact.</span>
            </h3>

            <p>
              Energy, engineering and infrastructure solutions
              for a changing world.
            </p>
          </div>

          {/* Commitment Card - no longer overlaps the text */}
          <div className="about-accent-box">
            <div className="about-commitment-icon">
              <ShieldCheck size={23} />
            </div>

            <div className="about-commitment-text">
              <span>OUR COMMITMENT</span>
              <strong>Quality. Reliability. Excellence.</strong>
            </div>

            <ArrowUpRight className="about-commitment-arrow" size={20} />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <div className="about-heading about-reveal reveal-up">
            <span className="section-tag">
              <span className="about-tag-line"></span>
              WHO WE ARE
            </span>

            <h2>
              Driving Progress Through
              <span> Engineering & Innovation</span>
            </h2>
          </div>

          <p className="about-intro about-reveal reveal-up">
            Zobot Resources Limited is an indigenous Nigerian company
            providing solutions across the energy, engineering and
            infrastructure sectors.
          </p>

          <p className="about-description about-reveal reveal-up">
            We are committed to delivering dependable services that
            support businesses, industries and communities. Through
            technical expertise, practical solutions and a focus on
            quality, we aim to contribute to sustainable development
            and long-term value.
          </p>

          {/* COMPANY STRENGTHS */}
          <div className="about-features">

            <div className="about-feature about-reveal reveal-up">
              <div className="about-feature-icon">
                <ShieldCheck size={23} />
              </div>

              <div className="about-feature-content">
                <h4>Quality & Reliability</h4>
                <p>
                  We prioritise dependable service and quality delivery.
                </p>
              </div>

              <ArrowRight
                className="about-feature-arrow"
                size={18}
              />
            </div>

            <div className="about-feature about-reveal reveal-up">
              <div className="about-feature-icon">
                <Lightbulb size={23} />
              </div>

              <div className="about-feature-content">
                <h4>Practical Innovation</h4>
                <p>
                  We pursue effective solutions to real-world challenges.
                </p>
              </div>

              <ArrowRight
                className="about-feature-arrow"
                size={18}
              />
            </div>

            <div className="about-feature about-reveal reveal-up">
              <div className="about-feature-icon">
                <Target size={23} />
              </div>

              <div className="about-feature-content">
                <h4>Client-Focused Delivery</h4>
                <p>
                  We work towards solutions that meet client needs.
                </p>
              </div>

              <ArrowRight
                className="about-feature-arrow"
                size={18}
              />
            </div>

          </div>

          {/* ABOUT LINK */}
          <a
            href="#contact"
            className="about-link about-reveal reveal-up"
          >
            Learn More About Us

            <span className="about-link-icon">
              <ArrowUpRight size={19} />
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default About;
