
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  Lightbulb,
  ShieldCheck,
  HardHat,
  Leaf,
  Handshake,
  Award,
  Target,
  Eye,
  Zap,
  Factory,
  Globe2,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

const values = [
  {
    number: "01",
    title: "Excellence",
    description:
      "Maintaining high professional standards in our operations and service delivery.",
    icon: Award,
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "Embracing new ideas and technologies to solve existing and emerging challenges.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "Conducting business with transparency, accountability and professionalism.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Safety",
    description:
      "Prioritising safety in our engineering, energy and construction activities.",
    icon: HardHat,
  },
  {
    number: "05",
    title: "Sustainability",
    description:
      "Supporting responsible development and long-term environmental and economic progress.",
    icon: Leaf,
  },
  {
    number: "06",
    title: "Customer Commitment",
    description:
      "Building lasting relationships through dependable solutions and service delivery.",
    icon: Handshake,
  },
];

const businessAreas = [
  "Oil & Gas",
  "Power Generation",
  "Renewable Energy",
  "Electrical Engineering",
  "Engineering Construction",
];

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* HERO */}
        <section className="about-hero">
          <div className="about-hero-background"></div>
          <div className="about-hero-overlay"></div>

          <div className="container about-hero-container">
            <div className="about-hero-content">
              <span className="about-eyebrow">
                <span></span>
                GET TO KNOW ZOBOT
              </span>

              <h1>
                Building Solutions.
                <br />
                <span>Powering Progress.</span>
              </h1>

              <p>
                Discover our story, our purpose and the vision
                driving our commitment to energy, engineering
                and infrastructure development.
              </p>

              <div className="about-breadcrumb">
                <a href="/">Home</a>
                <ArrowRight size={14} />
                <span>About Us</span>
              </div>
            </div>

            <div className="about-hero-side">
              <span className="about-hero-side-line"></span>
              <p>ENERGY</p>
              <p>ENGINEERING</p>
              <p>INFRASTRUCTURE</p>
            </div>
          </div>

          <div className="about-hero-bottom">
            <div className="container">
              <span>POWERING PROGRESS. ENGINEERING THE FUTURE.</span>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="about-intro section-padding">
          <div className="container about-intro-grid">

            <div className="about-intro-left">
              <span className="about-section-label">
                <span></span>
                WHO WE ARE
              </span>

              <h2>
                A Nigerian Company
                <span> With a Purpose.</span>
              </h2>

              <p className="about-intro-lead">
                Established to contribute to solving Nigeria's
                persistent energy and infrastructure challenges.
              </p>

              <div className="about-intro-image">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85"
                  alt="Modern industrial and commercial infrastructure"
                />

                <div className="about-image-overlay">
                  <span>OUR FOUNDATION</span>
                  <strong>Driven by purpose. Focused on progress.</strong>
                </div>
              </div>
            </div>

            <div className="about-intro-right">
              <div className="about-intro-text">
                <p>
                  Zobot Resources Limited is a registered indigenous
                  Nigerian company operating in the Energy,
                  Engineering and Infrastructure sectors.
                </p>

                <p>
                  Conceived in 2006 and incorporated as a Limited
                  Liability Company on April 25, 2007, in Aba,
                  Abia State, Nigeria, the company was established
                  with a clear purpose: to contribute to solving
                  the persistent energy and infrastructure
                  challenges affecting Nigeria's economic and
                  industrial development.
                </p>

                <p>
                  Over the years, we have developed a diversified
                  business focus spanning Oil & Gas, Power
                  Generation, Renewable Energy, Electrical
                  Engineering and Engineering Construction.
                </p>

                <p>
                  Our operations are driven by the understanding
                  that reliable energy and functional infrastructure
                  are fundamental to economic development,
                  industrial productivity and improved living standards.
                </p>

                <p>
                  Today, Zobot Resources Limited continues to
                  pursue opportunities that support energy security,
                  infrastructure development and sustainable
                  economic advancement across Nigeria and Africa.
                </p>
              </div>

              <div className="about-intro-facts">
                <div>
                  <CalendarDays size={21} />
                  <span>
                    <strong>2006</strong>
                    <small>Year conceived</small>
                  </span>
                </div>

                <div>
                  <Building2 size={21} />
                  <span>
                    <strong>2007</strong>
                    <small>Year incorporated</small>
                  </span>
                </div>
              </div>

              <a href="/#services" className="about-text-link">
                Explore Our Business Areas
                <ArrowUpRight size={18} />
              </a>
            </div>

          </div>
        </section>

        {/* BUSINESS AREAS STRIP */}
        <section className="about-business-strip">
          <div className="container about-business-inner">
            <div className="about-business-heading">
              <span>OUR BUSINESS FOCUS</span>
              <strong>Areas of Operation</strong>
            </div>

            <div className="about-business-list">
              {businessAreas.map((area) => (
                <div key={area}>
                  <CheckCircle2 size={16} />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="about-story section-padding">
          <div className="container about-story-grid">

            <div className="about-story-content">
              <span className="about-section-label">
                <span></span>
                OUR STORY
              </span>

              <h2>
                An Idea Born from a Need for
                <span> National Development.</span>
              </h2>

              <p>
                Nigeria's industrial and economic advancement has
                historically faced significant challenges,
                particularly in the energy and infrastructure sectors.
              </p>

              <p>
                Unreliable electricity supply and recurring
                petroleum product shortages have affected
                households, businesses, manufacturing activities
                and public institutions.
              </p>

              <p>
                These challenges have created gaps across the
                energy value chain, increased operational costs
                and limited industrial productivity.
              </p>

              <p>
                It was against this background that Zobot Resources
                Limited was conceived in 2006.
              </p>

              <p>
                The company was established to explore opportunities
                within these gaps and provide practical solutions
                through petroleum product supply, alternative
                energy systems, engineering services and
                infrastructure development.
              </p>

              <p>
                Our journey reflects a commitment to addressing
                real industry challenges while contributing to a
                more productive and industrialised African economy.
              </p>
            </div>

            <div className="about-story-visual">
              <div className="about-story-image">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85"
                  alt="Electricity transmission infrastructure"
                />
              </div>

              <div className="about-story-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div>
                    <span>2006</span>
                    <h3>The Idea</h3>
                    <p>
                      Zobot Resources Limited was conceived
                      with a purpose to address industry challenges.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div>
                    <span>25 APRIL 2007</span>
                    <h3>Incorporation</h3>
                    <p>
                      The company was incorporated as a
                      Limited Liability Company in Aba, Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="about-purpose section-padding">
          <div className="container">

            <div className="about-centered-heading">
              <span className="about-section-label">
                <span></span>
                OUR PURPOSE & DIRECTION
              </span>

              <h2>
                What Drives <span>Our Future</span>
              </h2>

              <p>
                Our mission and vision define our purpose and
                the impact we aspire to make across Nigeria and Africa.
              </p>
            </div>

            <div className="about-purpose-grid">

              <article className="about-purpose-card about-mission">
                <div className="about-purpose-top">
                  <div className="about-purpose-icon">
                    <Target size={27} />
                  </div>
                  <span>01 / OUR MISSION</span>
                </div>

                <h3>Creating Solutions. Driving Development.</h3>

                <p>
                  To contribute meaningfully to solving the
                  perennial challenges facing the Oil & Gas,
                  Power and Infrastructure sectors in Nigeria
                  and Africa through innovative, reliable and
                  sustainable solutions that drive industrialisation,
                  economic growth and social development.
                </p>

                <div className="about-purpose-decoration">
                  MISSION
                </div>
              </article>

              <article className="about-purpose-card about-vision">
                <div className="about-purpose-top">
                  <div className="about-purpose-icon">
                    <Eye size={27} />
                  </div>
                  <span>02 / OUR VISION</span>
                </div>

                <h3>A Leading Destination for Energy Solutions.</h3>

                <p>
                  To be the leading company and one-stop
                  destination for energy and infrastructure
                  solutions in Nigeria and Africa.
                </p>

                <div className="about-purpose-decoration">
                  VISION
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="about-values section-padding">
          <div className="container">

            <div className="about-values-heading">
              <div>
                <span className="about-section-label">
                  <span></span>
                  OUR CORE VALUES
                </span>

                <h2>
                  The Principles That
                  <span> Define Us.</span>
                </h2>
              </div>

              <p>
                Our values shape our culture, guide our decisions
                and influence how we work with clients, partners
                and the communities we serve.
              </p>
            </div>

            <div className="about-values-grid">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    className="about-value-card"
                    key={value.number}
                  >
                    <div className="about-value-top">
                      <div className="about-value-icon">
                        <Icon size={25} strokeWidth={1.7} />
                      </div>

                      <span>{value.number}</span>
                    </div>

                    <h3>{value.title}</h3>

                    <p>{value.description}</p>

                    <div className="about-value-line"></div>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="about-leadership section-padding">
          <div className="container">

            <div className="about-centered-heading">
              <span className="about-section-label">
                <span></span>
                OUR LEADERSHIP
              </span>

              <h2>
                Leadership That
                <span> Drives Our Vision.</span>
              </h2>

              <p>
                The leadership of Zobot Resources Limited
                provides strategic direction and guides the
                company's commitment to delivering energy,
                engineering and infrastructure solutions.
              </p>
            </div>

            <article className="about-leader-card">

              <div className="about-leader-visual">
                <div className="about-leader-monogram">
                  <span>AL</span>
                  <small>LEADERSHIP</small>
                </div>

                <div className="about-leader-visual-caption">
                  ZOBOT RESOURCES LIMITED
                </div>
              </div>

              <div className="about-leader-content">
                <span className="about-leader-label">
                  CHIEF EXECUTIVE OFFICER
                </span>

                <h3>Engr. Adewole Lateef</h3>

                <div className="about-leader-credentials">
                  <span>MNSE</span>
                  <span>MNIEEE</span>
                  <span>PMP</span>
                </div>

                <div className="about-leader-divider"></div>

                <p>
                  Zobot Resources Limited is led by Engr. Adewole
                  Lateef, whose professional background and
                  leadership guide the company's strategic
                  direction and commitment to delivering energy,
                  engineering and infrastructure solutions.
                </p>

                <div className="about-leader-footer">
                  <div>
                    <Building2 size={19} />
                    <span>Zobot Resources Limited</span>
                  </div>

                  <span className="about-leader-accent"></span>
                </div>
              </div>

            </article>

          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="about-cta-pattern"></div>

          <div className="container about-cta-content">
            <div>
              <span>LET'S BUILD THE FUTURE TOGETHER</span>

              <h2>
                Looking for a Reliable Energy
                & Infrastructure Partner?
              </h2>

              <p>
                Connect with Zobot Resources Limited to discuss
                your business needs, projects and opportunities.
              </p>
            </div>

            <a href="/#contact" className="about-cta-button">
              Get in Touch
              <ArrowUpRight size={19} />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;
