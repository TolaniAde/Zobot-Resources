
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import "../styles/contact.css";

function Contact() {
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
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:zobotresources@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="contact-heading">
          <span className="section-tag">CONTACT US</span>
          <h2>
            Let's Discuss Your <span>Next Project</span>
          </h2>
          <p>
            Whether you need energy, engineering or infrastructure
            solutions, our team is ready to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <span className="contact-info-label">GET IN TOUCH</span>
            <h3>We're Ready to Help You Move Forward.</h3>
            <p className="contact-info-description">
              Reach out to us to discuss your requirements, request
              information or explore how we can work together.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Phone size={21} />
                </div>
                <div>
                  <span>CALL US</span>
                  <a href="tel:+2348036034685">+234 803 603 4685</a>
                  <a href="tel:+2348179512401">+234 817 951 2401</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={21} />
                </div>
                <div>
                  <span>EMAIL ADDRESS</span>
                  <a href="mailto:zobotresources@gmail.com">
                    zobotresources@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={21} />
                </div>
                <div>
                  <span>OUR LOCATION</span>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Clock size={21} />
                </div>
                <div>
                  <span>BUSINESS ENQUIRIES</span>
                  <p>Contact us by phone or email.</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/2348036034685"
              target="_blank"
              rel="noreferrer"
              className="contact-whatsapp"
            >
              <MessageCircle size={19} />
              Chat With Us on WhatsApp
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-heading">
              <span>PROJECT ENQUIRY</span>
              <h3>Send Us a Message</h3>
              <p>Fill in the form and tell us how we can assist you.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
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
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service">Service of Interest *</label>
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
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
                <label htmlFor="contact-message">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us briefly about your project or enquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Enquiry <ArrowUpRight size={18} />
              </button>

              <p className="contact-form-note">
                Your information will be used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
