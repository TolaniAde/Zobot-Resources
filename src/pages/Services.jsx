
import {
  ArrowRight,
  ArrowUpRight,
  Fuel,
  Sun,
  BatteryCharging,
  Zap,
  HardHat,
  Recycle,
  Globe2,
  CheckCircle2,
  ShieldCheck,
  Lightbulb,
  Building2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Oil & Gas Services",
    tagline: "Supporting Energy Supply Through Reliable Petroleum Product Solutions.",
    description:
      "We operate within the downstream sector of the petroleum industry, providing procurement, storage, distribution and retailing of petroleum products.",
    details:
      "Our operations are focused on supporting the availability and movement of essential petroleum products to meet the energy requirements of different market segments.",
    icon: Fuel,
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=85",
    activities: [
      "Petroleum product procurement",
      "Storage and logistics management",
      "Distribution and supply operations",
      "Petroleum product retailing",
    ],
    products: [
      "Premium Motor Spirit (PMS)",
      "Automotive Gas Oil (AGO)",
      "Dual Purpose Kerosene (DPK)",
      "Household Kerosene (HHK)",
      "Aviation Turbine Kerosene (ATK)",
    ],
  },
  {
    number: "02",
    title: "Renewable Energy Solutions",
    tagline: "Driving Sustainable Energy Through Innovation.",
    description:
      "We recognise renewable energy as an important component of Africa’s future energy landscape.",
    details:
      "Zobot Resources Limited explores and provides alternative energy solutions designed to improve electricity access, reduce dependence on conventional grid supply and support sustainable development.",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    activities: [
      "Solar power system design and installation",
      "Solar mini-grid development",
      "Solar street lighting",
      "Hybrid energy systems",
      "Wind energy solutions",
      "Biomass energy systems",
      "Energy storage solutions",
      "Rural electrification projects",
    ],
    conclusion:
      "Our goal is to support homes, businesses, industries and institutions with reliable and sustainable energy alternatives.",
  },
  {
    number: "03",
    title: "Solar & Inverter Systems",
    tagline: "Reliable Power. Greater Energy Independence.",
    description:
      "We provide solar and inverter solutions designed to address electricity challenges across residential, commercial and industrial environments.",
    details:
      "Our approach focuses on developing power systems that meet individual energy requirements while improving efficiency and reducing dependence on unreliable electricity supply.",
    icon: BatteryCharging,
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85",
    activities: [
      "Solar photovoltaic (PV) systems",
      "Residential solar solutions",
      "Commercial solar solutions",
      "Industrial solar power systems",
      "Inverter systems",
      "Battery storage systems",
      "Hybrid solar-inverter solutions",
      "Backup power systems",
    ],
    conclusion:
      "From system design to installation and maintenance, we aim to deliver dependable power solutions tailored to our clients’ requirements.",
  },
  {
    number: "04",
    title: "Electrical Engineering",
    tagline: "Engineering Reliable Electrical Infrastructure.",
    description:
      "Our electrical engineering division provides professional services supporting the design, installation, operation and maintenance of electrical systems.",
    details:
      "We work towards delivering efficient and dependable electrical infrastructure for commercial, industrial and institutional applications.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
    activities: [
      "Electrical system design",
      "Power distribution networks",
      "Industrial electrical installations",
      "Electrical maintenance",
      "Testing and commissioning",
      "Power system upgrades",
      "Control and automation systems",
      "Energy efficiency solutions",
    ],
    conclusion:
      "We emphasise technical precision, safety, quality and operational reliability throughout our service delivery.",
  },
  {
    number: "05",
    title: "Engineering & Construction",
    tagline: "Building Infrastructure. Supporting Development.",
    description:
      "Zobot Resources Limited provides engineering and construction services covering infrastructure development, project execution and technical installations.",
    details:
      "We combine engineering knowledge with professional project delivery approaches to support the development of functional and sustainable infrastructure.",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    activities: [
      "Engineering, Procurement and Construction (EPC)",
      "Infrastructure development",
      "Civil and structural works",
      "Industrial facilities construction",
      "Facility rehabilitation and upgrades",
      "Mechanical and electrical installations",
      "Project management services",
      "Turnkey construction solutions",
    ],
    conclusion:
      "Our objective is to support projects from planning and procurement through construction and delivery.",
  },
  {
    number: "06",
    title: "Waste Management",
    tagline: "Supporting Responsible Environmental Development.",
    description:
      "Zobot Resources Limited also identifies waste management as one of its business service areas.",
    details:
      "We have a dedicated service that deals with waste collection, treatment, recycling, disposal and environmental management capabilities.",
    icon: Recycle,
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85",
    activities: [
      "Waste collection",
      "Waste treatment",
      "Recycling",
      "Waste disposal",
      "Environmental management",
    ],
  },
  {
    number: "07",
    title: "Import & Export",
    tagline: "Connecting Businesses to Global Supply Opportunities.",
    description:
      "Through its import and export business activities, Zobot Resources Limited seeks to support the sourcing and movement of products, materials and equipment across markets.",
    details:
      "Our import and export activities support access to products and resources needed by businesses and other market participants.",
    icon: Globe2,
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85",
    activities: [
      "Product sourcing",
      "Import and export activities",
      "Materials and equipment supply",
      "Cross-market trade support",
    ],
  },
];

function Services() {
  return (
    <>
      <Navbar />

      <main className="services-page">
        {/* Hero */}
        <section className="services-hero">
          <div className="services-hero-overlay"></div>

          <div className="container services-hero-content">
            <span className="services-eyebrow">
              WHAT WE DO
            </span>

            <h1>
              Comprehensive Solutions.
              <span> One Reliable Partner.</span>
            </h1>

            <p>
              Integrated energy, engineering and infrastructure
              solutions designed to support progress and development.
            </p>

            <div className="services-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Our Services</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="services-intro section-padding">
          <div className="container services-intro-grid">
            <div className="services-intro-heading">
              <span className="section-label">
                OUR CAPABILITIES
              </span>
              <h2>
                Solutions That Meet
                <span> Real-World Needs.</span>
              </h2>
            </div>

            <div className="services-intro-copy">
              <p>
                At Zobot Resources Limited, we provide integrated
                solutions across the energy, engineering and
                infrastructure value chains.
              </p>

              <p>
                Our services are designed to address the evolving
                needs of residential, commercial, industrial and
                institutional clients.
              </p>

              <a href="/#contact" className="services-text-link">
                Discuss a project with us
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Service overview */}
        <section className="services-overview">
          <div className="container">
            <div className="services-overview-heading">
              <span className="section-label">
                OUR SERVICE AREAS
              </span>
              <h2>What We Do</h2>
              <p>
                Explore our range of services and discover how
                we can support your energy and infrastructure needs.
              </p>
            </div>

            <div className="services-overview-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <a
                    href={`#service-${service.number}`}
                    className="services-overview-card"
                    key={service.number}
                  >
                    <span className="overview-number">
                      {service.number}
                    </span>

                    <span className="overview-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </span>

                    <h3>{service.title}</h3>

                    <span className="overview-arrow">
                      <ArrowRight size={18} />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed services */}
        <section className="services-details section-padding">
          <div className="container">
            <div className="services-details-heading">
              <span className="section-label">
                WHAT WE OFFER
              </span>
              <h2>
                Our Services in Detail
              </h2>
            </div>

            <div className="services-list">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    className={`service-detail-card ${
                      index % 2 !== 0 ? "service-reverse" : ""
                    }`}
                    id={`service-${service.number}`}
                    key={service.number}
                  >
                    <div className="service-detail-image">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                      />

                      <span className="service-image-number">
                        {service.number}
                      </span>
                    </div>

                    <div className="service-detail-content">
                      <div className="service-detail-icon">
                        <Icon size={27} strokeWidth={1.7} />
                      </div>

                      <span className="section-label">
                        SERVICE {service.number}
                      </span>

                      <h3>{service.title}</h3>

                      <h4>{service.tagline}</h4>

                      <p>{service.description}</p>
                      <p>{service.details}</p>

                      <div className="service-activities">
                        <h5>
                          {service.products
                            ? "Our Activities Include"
                            : "Our Solutions Include"}
                        </h5>

                        <ul>
                          {service.activities.map((activity) => (
                            <li key={activity}>
                              <CheckCircle2 size={17} />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {service.products && (
                        <div className="service-products">
                          <h5>Products Supplied</h5>

                          <div className="service-product-list">
                            {service.products.map((product) => (
                              <span key={product}>
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.conclusion && (
                        <p className="service-conclusion">
                          {service.conclusion}
                        </p>
                      )}

                      <a
                        href="/#contact"
                        className="service-contact-link"
                      >
                        Enquire About This Service
                        <ArrowRight size={17} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="services-why">
          <div className="container">
            <div className="services-why-heading">
              <span className="section-label">
                THE ZOBOT ADVANTAGE
              </span>

              <h2>
                One Partner.
                <span> Multiple Solutions.</span>
              </h2>

              <p>
                We bring together diverse service areas under one
                organisation, with a commitment to dependable
                solutions and professional service delivery.
              </p>
            </div>

            <div className="services-why-grid">
              <div className="services-why-card">
                <Building2 size={29} />
                <h3>Integrated Solutions</h3>
                <p>
                  Multiple service capabilities across energy,
                  engineering and infrastructure.
                </p>
              </div>

              <div className="services-why-card">
                <ShieldCheck size={29} />
                <h3>Commitment to Quality</h3>
                <p>
                  A focus on professional standards, safety
                  and dependable service delivery.
                </p>
              </div>

              <div className="services-why-card">
                <Lightbulb size={29} />
                <h3>Innovation</h3>
                <p>
                  Exploring practical solutions to evolving
                  energy and infrastructure needs.
                </p>
              </div>

              <div className="services-why-card">
                <Globe2 size={29} />
                <h3>Development Focus</h3>
                <p>
                  Supporting businesses, communities and
                  institutions across Nigeria and Africa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="services-cta">
          <div className="container services-cta-content">
            <div>
              <span className="services-eyebrow">
                LET'S WORK TOGETHER
              </span>

              <h2>
                Have a Project in Mind?
                <span> Let's Discuss It.</span>
              </h2>

              <p>
                Get in touch with Zobot Resources Limited to
                discuss your energy, engineering or infrastructure
                requirements.
              </p>
            </div>

            <a href="/#contact" className="services-cta-button">
              Contact Our Team
              <ArrowRight size={19} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Services;
