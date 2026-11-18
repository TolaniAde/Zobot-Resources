
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import "../styles/navbar.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Services",
    href: "/services",
    dropdown: [
      { name: "Oil & Gas Services", href: "/services" },
      { name: "Renewable Energy", href: "/services" },
      { name: "Solar & Inverter Systems", href: "/services" },
      { name: "Electrical Engineering", href: "/services" },
      { name: "Engineering & Construction", href: "/services" },
      { name: "Waste Management", href: "/services" },
      { name: "Import & Export", href: "/services" },
    ],
  },
  { name: "Our Industries", href: "/industries" },
  { name: "Our Projects", href: "/#projects" },
  { name: "Contact Us", href: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/images/zobot-logo.png"
            alt="Zobot Resources Limited"
          />
        </Link>

        {/* DESKTOP AND MOBILE NAVIGATION */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          {navLinks.map((link) => (
            <div
              className={`nav-item ${link.dropdown ? "has-dropdown" : ""}`}
              key={link.name}
            >
              {link.dropdown ? (
                <>
                  <button
                    className={`nav-link nav-dropdown-toggle ${
                      servicesOpen ? "dropdown-active" : ""
                    }`}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                  >
                    {link.name}
                    <ChevronDown
                      size={15}
                      className={servicesOpen ? "rotate" : ""}
                    />
                  </button>

                  <div
                    className={`nav-dropdown ${
                      servicesOpen ? "show-dropdown" : ""
                    }`}
                  >
                    {link.dropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive ? "active" : ""
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}

          {/* MOBILE CALL BUTTON */}
          <a
            href="tel:+2348036034685"
            className="nav-mobile-call"
          >
            <Phone size={17} />
            <span>Call Us</span>
          </a>
        </nav>

        {/* DESKTOP CONTACT BUTTON */}
        <Link to="/contact" className="navbar-contact">
          <span>Get in Touch</span>
          <ArrowRight size={17} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setServicesOpen(false);
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
