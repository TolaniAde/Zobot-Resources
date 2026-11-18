
import { useEffect, useRef, useState } from "react";
import "../styles/services.css";

import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Droplets,
  Sun,
  BatteryCharging,
  Zap,
  HardHat,
  Recycle,
  Globe,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Oil & Gas Services",
    shortTitle: "Oil & Gas",
    category: "ENERGY SOLUTIONS",
    description:
      "Supporting oil and gas operations with solutions tailored to the needs of the energy sector.",
    icon: Droplets,
    keywords: ["Energy Operations", "Industrial Support", "Technical Solutions"],
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "Renewable Energy",
    shortTitle: "Renewable Energy",
    category: "SUSTAINABLE ENERGY",
    description:
      "Promoting cleaner and more sustainable energy solutions for businesses and communities.",
    icon: Sun,
    keywords: ["Clean Energy", "Sustainability", "Energy Transition"],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Solar & Inverter Systems",
    shortTitle: "Solar & Inverters",
    category: "POWER SOLUTIONS",
    description:
      "Providing solar power and inverter solutions designed to improve energy reliability.",
    icon: BatteryCharging,
    keywords: ["Solar Power", "Backup Systems", "Energy Reliability"],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "04",
    title: "Electrical Engineering",
    shortTitle: "Electrical Engineering",
    category: "ENGINEERING",
    description:
      "Delivering electrical engineering solutions for industrial, commercial and infrastructure needs.",
    icon: Zap,
    keywords: ["Electrical Systems", "Technical Expertise", "Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "05",
    title: "Engineering & Construction",
    shortTitle: "Engineering & Construction",
    category: "PROJECT DELIVERY",
    description:
      "Supporting construction and engineering projects with a focus on quality and functionality.",
    icon: HardHat,
    keywords: ["Engineering Projects", "Construction", "Quality Delivery"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "06",
    title: "Waste Management",
    shortTitle: "Waste Management",
    category: "ENVIRONMENTAL SOLUTIONS",
    description:
      "Supporting responsible waste handling and management practices for a cleaner environment.",
    icon: Recycle,
    keywords: ["Waste Handling", "Environmental Care", "Sustainability"],
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "07",
    title: "Import & Export",
    shortTitle: "Import & Export",
    category: "TRADE & SUPPLY",
    description:
      "Facilitating the movement and supply of products and materials across markets.",
    icon: Globe,
    keywords: ["Product Supply", "Trade Support", "Market Access"],
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1000&q=85",
  },
];

function Services() {
  const [activeService, setActiveService] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(0);
  const [panelKey, setPanelKey] = useState(0);

  const sectionRef = useRef(null);

  const selectedService = services[activeService];
  const SelectedIcon = selectedService.icon;

  // Scroll-triggered reveal animations
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(".services-reveal");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
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
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Desktop service selection
  const handleServiceChange = (index) => {
    if (index === activeService) return;

    setActiveService(index);
    setPanelKey((previous) => previous + 1);
  };

  // Mobile accordion selection
  const handleMobileToggle = (index) => {
    setMobileOpen((previous) =>
      previous === index ? -1 : index
    );
  };

  return (
    <section
      className="services-section section-padding"
      id="services"
      ref={sectionRef}
    >
      <div className="container">

        {/* SECTION HEADING */}
        <div className="services-heading services-reveal reveal-up">
          <div className="services-heading-content">
            <span className="section-tag">
              <span className="services-tag-line"></span>
              WHAT WE DO
            </span>

            <h2>
              Solutions That
              <span> Move Industries Forward.</span>
            </h2>

            <p>
              Integrated solutions across energy, engineering and
              infrastructure to support progress and business growth.
            </p>
          </div>

          <a href="#contact" className="services-heading-link">
            Discuss a Project
            <ArrowUpRight size={19} />
          </a>
        </div>

        {/* =================================
            DESKTOP SERVICES SHOWCASE
        ================================= */}

        <div className="services-showcase">

          {/* LEFT SERVICE NAVIGATION */}
          <div className="services-navigation services-reveal reveal-left">

            <div className="services-navigation-heading">
              <span>OUR EXPERTISE</span>
              <span>SELECT A SERVICE</span>
            </div>

            <div className="services-list">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService === index;

                return (
                  <button
                    type="button"
                    className={`service-nav-item ${
                      isActive ? "active" : ""
                    }`}
                    key={service.number}
                    onClick={() => handleServiceChange(index)}
                    aria-pressed={isActive}
                  >
                    <span className="service-nav-number">
                      {service.number}
                    </span>

                    <span className="service-nav-icon">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>

                    <span className="service-nav-title">
                      {service.shortTitle}
                    </span>

                    <ArrowUpRight
                      className="service-nav-arrow"
                      size={17}
                    />
                  </button>
                );
              })}
            </div>

            <div className="services-navigation-footer">
              <span className="services-status-dot"></span>
              <span>SEVEN AREAS OF EXPERTISE</span>
            </div>
          </div>

          {/* RIGHT FEATURED SERVICE */}
          <div
            className="services-featured services-reveal reveal-right"
            key={panelKey}
          >
            <div className="services-featured-background">
              <div className="services-featured-grid"></div>
              <div className="services-featured-orb services-orb-one"></div>
              <div className="services-featured-orb services-orb-two"></div>
            </div>

            <div className="services-featured-top">
              <span className="services-featured-category">
                {selectedService.category}
              </span>

              <span className="services-featured-number">
                {selectedService.number}
              </span>
            </div>

            <div className="services-featured-content">
              <div className="services-featured-icon">
                <SelectedIcon size={45} strokeWidth={1.4} />
              </div>

              <span className="services-featured-label">
                OUR SERVICES
              </span>

              <h3>{selectedService.title}</h3>

              <p>{selectedService.description}</p>

              <div className="services-keywords">
                {selectedService.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>

              <a href="#contact" className="services-featured-link">
                Enquire About This Service
                <span>
                  <ArrowUpRight size={19} />
                </span>
              </a>
            </div>

            <div className="services-featured-footer">
              <span>POWERING PROGRESS. ENGINEERING THE FUTURE.</span>

              <div className="services-progress">
                <span
                  style={{
                    width: `${((activeService + 1) / services.length) * 100}%`,
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>

        {/* =================================
            MOBILE SERVICES ACCORDION
        ================================= */}

        <div className="services-mobile services-reveal reveal-up">

          <div className="services-mobile-heading">
            <span>EXPLORE OUR EXPERTISE</span>
            <span>SELECT A SERVICE TO LEARN MORE</span>
          </div>

          <div className="services-mobile-list">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = mobileOpen === index;

              return (
                <article
                  className={`mobile-service-item ${
                    isOpen ? "open" : ""
                  }`}
                  key={service.number}
                >
                  <button
                    type="button"
                    className="mobile-service-trigger"
                    onClick={() => handleMobileToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="mobile-service-number">
                      {service.number}
                    </span>

                    <span className="mobile-service-icon">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>

                    <span className="mobile-service-title">
                      {service.shortTitle}
                    </span>

                    <span className="mobile-service-chevron">
                      <ChevronDown size={19} />
                    </span>
                  </button>

                  <div
                    className={`mobile-service-details ${
                      isOpen ? "expanded" : ""
                    }`}
                  >
                    <div className="mobile-service-details-inner">

                      <div className="mobile-service-image">
                        <img
                          src={service.image}
                          alt={`${service.title} illustrative photograph`}
                          loading="lazy"
                        />

                        <span>{service.category}</span>
                      </div>

                      <div className="mobile-service-description">
                        <h3>{service.title}</h3>

                        <p>{service.description}</p>

                        <div className="mobile-service-keywords">
                          {service.keywords.map((keyword) => (
                            <span key={keyword}>{keyword}</span>
                          ))}
                        </div>

                        <a
                          href="#contact"
                          className="mobile-service-link"
                        >
                          Enquire About This Service
                          <ArrowUpRight size={17} />
                        </a>
                      </div>

                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="services-mobile-footer">
            <span className="services-status-dot"></span>
            <span>SEVEN AREAS OF EXPERTISE</span>
          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="services-bottom-note services-reveal reveal-up">
          <span className="services-bottom-line"></span>

          <p>
            One partner. Multiple capabilities. Solutions built around
            your needs.
          </p>

          <a href="#contact">
            Let's Work Together
            <ArrowRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;
