
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  Fuel,
  Settings,
  Building2,
  Sun,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Industries.css";

const industries = [
  {
    number: "01",
    title: "Energy",
    tagline: "Powering Homes, Businesses and Industries.",
    description:
      "Providing solutions across petroleum products, conventional power and renewable energy.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
    icon: Zap,
  },
  {
    number: "02",
    title: "Oil & Gas",
    tagline: "Supporting Essential Energy Supply.",
    description:
      "Supporting downstream petroleum operations through procurement, storage, distribution and retailing.",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1400&q=85",
    icon: Fuel,
  },
  {
    number: "03",
    title: "Engineering",
    tagline: "Delivering Technical Excellence.",
    description:
      "Delivering electrical engineering, technical installations and related engineering services.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=85",
    icon: Settings,
  },
  {
    number: "04",
    title: "Construction & Infrastructure",
    tagline: "Building Infrastructure for Progress.",
    description:
      "Supporting infrastructure development, construction and industrial facility projects.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    icon: Building2,
  },
  {
    number: "05",
    title: "Renewable Energy",
    tagline: "Advancing a Sustainable Energy Future.",
    description:
      "Exploring sustainable energy technologies that improve electricity access and support long-term energy security.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
    icon: Sun,
  },
];

function Industries() {
  return (
    <>
      <Navbar />

      <main className="industries-page">

        {/* Hero Section */}
        <section className="industries-hero">
          <div className="industries-hero-overlay"></div>

          <div className="container industries-hero-content">
            <span className="industries-eyebrow">
              OUR INDUSTRIES
            </span>

            <h1>
              Serving Critical Sectors
              <span> That Power Economic Growth.</span>
            </h1>

            <p>
              Working across essential industries to support
              development, strengthen infrastructure and
              contribute to economic progress.
            </p>

            <div className="industries-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Our Industries</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="industries-intro section-padding">
          <div className="container industries-intro-grid">
            <div>
              <span className="section-label">
                WHERE WE OPERATE
              </span>

              <h2>
                Industries That
                <span> Shape Our Future.</span>
              </h2>
            </div>

            <div className="industries-intro-copy">
              <p>
                Zobot Resources Limited operates across
                interconnected industries that are essential
                to economic development and industrial
                transformation.
              </p>

              <p>
                Through our involvement in energy, engineering
                and infrastructure-related sectors, we seek
                to provide solutions that support businesses,
                institutions and communities.
              </p>

              <a href="/#contact" className="industries-text-link">
                Connect with our team
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Industries Overview */}
        <section className="industries-overview">
          <div className="container">
            <div className="industries-section-heading">
              <span className="section-label">
                OUR INDUSTRY FOCUS
              </span>

              <h2>
                The Sectors We Serve
              </h2>

              <p>
                Explore the key industries where our
                capabilities and business activities are focused.
              </p>
            </div>

            <div className="industries-overview-grid">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <a
                    href={`#industry-${industry.number}`}
                    className="industry-overview-card"
                    key={industry.number}
                  >
                    <Icon size={24} />

                    <span>{industry.number}</span>

                    <h3>{industry.title}</h3>

                    <ArrowRight
                      size={18}
                      className="industry-overview-arrow"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Details */}
        <section className="industries-details section-padding">
          <div className="container">
            <div className="industries-section-heading">
              <span className="section-label">
                OUR AREAS OF OPERATION
              </span>

              <h2>
                Understanding Our Industries
              </h2>
            </div>

            <div className="industries-list">
              {industries.map((industry, index) => {
                const Icon = industry.icon;

                return (
                  <article
                    className={`industry-detail-card ${
                      index % 2 !== 0 ? "industry-reverse" : ""
                    }`}
                    id={`industry-${industry.number}`}
                    key={industry.number}
                  >
                    <div className="industry-detail-image">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        loading="lazy"
                      />

                      <span className="industry-image-number">
                        {industry.number}
                      </span>
                    </div>

                    <div className="industry-detail-content">
                      <div className="industry-detail-icon">
                        <Icon size={28} strokeWidth={1.7} />
                      </div>

                      <span className="section-label">
                        INDUSTRY {industry.number}
                      </span>

                      <h3>{industry.title}</h3>

                      <h4>{industry.tagline}</h4>

                      <p>{industry.description}</p>

                      <a
                        href="/services"
                        className="industry-service-link"
                      >
                        Explore Our Services
                        <ArrowRight size={17} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="industries-cta">
          <div className="container industries-cta-content">
            <div>
              <span className="industries-eyebrow">
                BUILDING THE FUTURE TOGETHER
              </span>

              <h2>
                Looking for a Reliable
                <span> Industry Partner?</span>
              </h2>

              <p>
                Let's explore how Zobot Resources Limited
                can support your next energy, engineering
                or infrastructure project.
              </p>
            </div>

            <a
              href="/#contact"
              className="industries-cta-button"
            >
              Get in Touch
              <ArrowRight size={19} />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Industries;
