
import {
  ArrowUpRight,
  Factory,
  Fuel,
  Building2,
  Leaf,
  Truck,
} from "lucide-react";
import "../styles/industries.css";

const industries = [
  {
    number: "01",
    title: "Oil & Gas",
    description:
      "Supporting the energy sector through dependable oil and gas solutions.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646e95f15?auto=format&fit=crop&w=900&q=85",
    icon: Fuel,
  },
  {
    number: "02",
    title: "Power & Energy",
    description:
      "Supporting conventional and renewable energy solutions for a changing world.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85",
    icon: Factory,
  },
  {
    number: "03",
    title: "Infrastructure",
    description:
      "Contributing to infrastructure development through engineering and construction.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    icon: Building2,
  },
  {
    number: "04",
    title: "Environmental Services",
    description:
      "Promoting responsible waste management and environmental practices.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=85",
    icon: Leaf,
  },
  {
    number: "05",
    title: "Trade & Logistics",
    description:
      "Supporting the supply and movement of products and materials across markets.",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=85",
    icon: Truck,
  },
];

function Industries() {
  return (
    <section className="industries-section section-padding" id="industries">
      <div className="container">
        <div className="industries-heading">
          <div>
            <span className="section-tag">WHERE WE OPERATE</span>
            <h2>
              Industries We <span>Serve</span>
            </h2>
            <p>
              Our capabilities span key sectors that support economic
              development, industrial growth and sustainable progress.
            </p>
          </div>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article className="industry-card" key={industry.number}>
                <img src={industry.image} alt={industry.title} />

                <div className="industry-overlay"></div>

                <div className="industry-number">{industry.number}</div>

                <div className="industry-content">
                  <div className="industry-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>

                  <a href="#contact" aria-label={`Enquire about ${industry.title}`}>
                    Explore <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Industries;
