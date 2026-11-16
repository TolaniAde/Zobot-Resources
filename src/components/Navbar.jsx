
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import "../styles/navbar.css";

const navLinks = [

  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Industries", href: "/industries" },
  { name: "Our Projects", href: "/#projects" },
  { name: "Contact Us", href: "/contact" },

];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">
          <span className="logo-mark">Z</span>
          <span className="logo-text">
            <strong>ZOBOT</strong>
            <small>RESOURCES LIMITED</small>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+2348036034685" className="nav-mobile-call">
            <Phone size={16} /> Call Us
          </a>
        </nav>

        <a href="tel:+2348036034685" className="navbar-contact">
          <Phone size={16} />
          <span>Get In Touch</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
