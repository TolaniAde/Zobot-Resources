import "../styles/services.css";

import {
  ArrowUpRight,
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
    title: "Oil & Gas",
    description:
      "Supporting oil and gas operations with solutions tailored to the needs of the energy sector.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Renewable Energy",
    description:
      "Promoting cleaner and more sustainable energy solutions for businesses and communities.",
    icon: Sun,
  },
  {
    number: "03",
    title: "Solar & Inverter Systems",
    description:
      "Providing solar power and inverter solutions designed to improve energy reliability.",
    icon: BatteryCharging,
  },
  {
    number: "04",
    title: "Electrical Engineering",
    description:
      "Delivering electrical engineering solutions for industrial, commercial and infrastructure needs.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Engineering & Construction",
    description:
      "Supporting construction and engineering projects with a focus on quality and functionality.",
    icon: HardHat,
  },
  {
    number: "06",
    title: "Waste Management",
    description:
      "Supporting responsible waste handling and management practices for a cleaner environment.",
    icon: Recycle,
  },
  {
    number: "07",
    title: "Import & Export",
    description:
      "Facilitating the movement and supply of products and materials across markets.",
    icon: Globe,
  },
];

function Services() {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="services-heading">
          <div>
            <span className="section-tag">WHAT WE DO</span>
            <h2>
              Our Core <span>Services</span>
            </h2>
            <p>
              Integrated solutions across energy, engineering and
              infrastructure to support progress and business growth.
            </p>
          </div>

          <a href="#contact" className="services-heading-link">
            Discuss a Project <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a
                  href="#contact"
                  className="service-card-link"
                  aria-label={`Enquire about ${service.title}`}
                >
                  Enquire Now <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
