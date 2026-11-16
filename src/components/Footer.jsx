
import {
  ArrowUpRight,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import "../styles/footer.css";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Our Industries", href: "#industries" },
  { name: "Our Projects", href: "#projects" },
  { name: "Contact Us", href: "#contact" },
];

const services = [
  "Oil & Gas",
  "Renewable Energy",
  "Solar & Inverter Systems",
  "Electrical Engineering",
  "Engineering & Construction",
  "Waste Management",
  "Import & Export",
];

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">
        <div className="container footer-grid">

          {/* Company Information */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-mark">Z</span>

              <span className="footer-logo-text">
                <strong>ZOBOT</strong>
                <small>RESOURCES LIMITED</small>
              </span>
            </a>

            <p>
              Zobot Resources Limited is an indigenous Nigerian
              company delivering solutions across energy,
              engineering and infrastructure.
            </p>

            <p className="footer-slogan">
              Powering Progress. Engineering the Future.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>
                    <ArrowUpRight size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <ul>
              {services.map((service) => (
                <li key={service}>
                  <a href="#services">
                    <ArrowUpRight size={14} />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column footer-contact">
            <h3>Contact Information</h3>

            <div className="footer-contact-item">
              <MapPin size={19} />
              <span>Lagos, Nigeria</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={19} />

              <div>
                <a href="tel:+2348036034685">
                  +234 803 603 4685
                </a>

                <a href="tel:+2348179512401">
                  +234 817 951 2401
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={19} />

              <a href="mailto:zobotresources@gmail.com">
                zobotresources@gmail.com
              </a>
            </div>

            <a href="#contact" className="footer-contact-button">
              Send an Enquiry
              <ArrowUpRight size={17} />
            </a>
          </div>

        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">

          <p>
            © 2026 Zobot Resources Limited. All Rights Reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to Top
            <ArrowUp size={16} />
          </a>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
