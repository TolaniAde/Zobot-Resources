
import { useEffect, useRef } from "react";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";

import "../styles/contact.css";

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll("[data-reveal]");

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
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Website Enquiry - ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}`
    );

    window.location.href = `mailto:zobotresources@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="contact-section section-padding"
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-background">
        <div className="contact-background-orb contact-orb-one"></div>
        <div className="contact-background-orb contact-orb-two"></div>
      </div>

      <div className="container contact-container">

        <div className="contact-heading" data-reveal="up">
          <span className="contact-section-tag">
            <span></span>
            CONTACT US
          </span>

          <h2>
            Let's Discuss Your
            <span> Next Project.</span>
          </h2>

          <p>
            Have a project in mind or need a dependable partner for your
            next energy, engineering or infrastructure requirement?
            Let's start a conversation.
          </p>
        </div>

        <div className="contact-grid">

          {/* CONTACT INFORMATION */}

          <div className="contact-info" data-reveal="left">

            <div className="contact-info-decoration">
              <span>LET'S CONNECT</span>
            </div>

            <div className="contact-info-content">
              <span className="contact-info-label">GET IN TOUCH</span>

              <h3>
                We're Ready to Help You
                <span> Move Forward.</span>
              </h3>

              <p className="contact-info-description">
                Reach out to our team to discuss your requirements,
                request information or explore how we can work together.
                We look forward to hearing from you.
              </p>

              <div className="contact-details">

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <Phone size={20} />
                  </div>

                  <div className="contact-detail-text">
                    <span>PHONE NUMBERS</span>
                    <a href="tel:+2348036034685">+234 803 603 4685</a>
                    <a href="tel:+2348179512401">+234 817 951 2401</a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <Mail size={20} />
                  </div>

                  <div className="contact-detail-text">
                    <span>EMAIL ADDRESS</span>
                    <a href="mailto:zobotresources@gmail.com">
                      zobotresources@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <MapPin size={20} />
                  </div>

                  <div className="contact-detail-text">
                    <span>OUR LOCATION</span>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <Clock size={20} />
                  </div>

                  <div className="contact-detail-text">
                    <span>BUSINESS ENQUIRIES</span>
                    <p>Contact us by phone or email.</p>
                  </div>
                </div>

              </div>

              <a
                href="https://wa.me/2348036034685"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp"
              >
                <MessageCircle size={19} />
                <span>Chat With Us on WhatsApp</span>
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="contact-info-footer">
              <ShieldCheck size={15} />
              <span>POWERING PROGRESS. ENGINEERING THE FUTURE.</span>
            </div>
          </div>

          {/* CONTACT FORM */}

          <div className="contact-form-wrapper" data-reveal="right">

            <div className="contact-form-top">
              <div>
                <span className="contact-form-label">PROJECT ENQUIRY</span>
                <h3>Send Us a Message</h3>
                <p>
                  Tell us a little about your project or enquiry.
                  Our team will be glad to assist you.
                </p>
              </div>

              <div className="contact-form-icon">
                <Send size={23} />
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">
                    Full Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">
                    Email Address <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service">
                    Service of Interest <span>*</span>
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Oil & Gas</option>
                    <option>Renewable Energy</option>
                    <option>Solar & Inverter Systems</option>
                    <option>Electrical Engineering</option>
                    <option>Engineering & Construction</option>
                    <option>Waste Management</option>
                    <option>Import & Export</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">
                  Your Message <span>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project, requirements or enquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                <span>Send Enquiry</span>
                <ArrowUpRight size={19} />
              </button>

              <p className="contact-form-note">
                <ShieldCheck size={14} />
                Your information will be used to respond to your enquiry.
              </p>

            </form>
          </div>
        </div>

        <div className="contact-bottom-note" data-reveal="up">
          <div className="contact-bottom-line"></div>

          <p>
            Have a project in mind? Let's build something meaningful together.
          </p>

          <a href="mailto:zobotresources@gmail.com">
            Start a Conversation
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
