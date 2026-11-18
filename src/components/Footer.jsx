
import {
  ArrowUpRight,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import "../styles/footer.css";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/#services" },
  { name: "Our Industries", href: "/#industries" },
  { name: "Our Projects", href: "/#projects" },
  { name: "Contact Us", href: "/#contact" },
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
    <footer className="footer" id="footer">
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Company Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <img
                src="/images/zobot-logo.png"
                alt="Zobot Resources Limited"
              />
            </a>

            <p className="footer-description">
              Delivering reliable solutions across energy,
              engineering and infrastructure through innovation,
              technical expertise and excellence.
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
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Explore</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>
                    <ArrowUpRight size={14} />
                    <span>{link.name}</span>
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
                  <a href="/#services">
                    <ArrowUpRight size={14} />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <p className="footer-contact-intro">
              Have a project or enquiry? Our team is ready to hear from you.
            </p>

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

            <a href="/#contact" className="footer-contact-button">
              Send an Enquiry
              <ArrowUpRight size={17} />
            </a>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">

          <p className="footer-copyright">
            © {new Date().getFullYear()} Zobot Resources Limited.
            All Rights Reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to Top
            <span>
              <ArrowUp size={15} />
            </span>
          </a>

        </div>

        <div className="container footer-credit">
          <span>Website Design & Development by</span>

          <a
            href="https://tolani-portfolio-seven.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Tolani A's portfolio"
          >
            <Globe size={13} />
            Tolani A.
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
