
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Building2,
  MessageSquare,
  Send,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Website Enquiry - ${formData.service}`
    );

    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}
Company Name: ${formData.companyName || "Not provided"}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Service of Interest: ${formData.service}

Message:
${formData.message}`
    );

    window.location.href =
      `mailto:zobotresources@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* HERO SECTION */}
        <section className="contact-hero">
          <div className="contact-hero-overlay"></div>

          <div className="container contact-hero-content">
            <span className="contact-eyebrow">
              GET IN TOUCH
            </span>

            <h1>
              Let's Discuss
              <span> Your Next Project.</span>
            </h1>

            <p>
              Whether you are looking for reliable energy solutions,
              engineering expertise, infrastructure development or
              business collaboration, our team is available to
              discuss your requirements.
            </p>

            <div className="contact-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact Us</span>
            </div>
          </div>
        </section>

        {/* CONTACT INTRODUCTION */}
        <section className="contact-intro">
          <div className="container contact-intro-content">
            <div>
              <span className="section-label">
                WE'RE READY TO CONNECT
              </span>

              <h2>
                Tell Us What
                <span> You Have in Mind.</span>
              </h2>
            </div>

            <p>
              Every successful project begins with a conversation.
              Reach out to Zobot Resources Limited and let us know
              how we can support your business, organisation or
              project requirements.
            </p>
          </div>
        </section>

        {/* MAIN CONTACT SECTION */}
        <section className="contact-main section-padding">
          <div className="container contact-main-grid">

            {/* CONTACT INFORMATION */}
            <aside className="contact-information">
              <div className="contact-info-heading">
                <span className="section-label">
                  CONTACT INFORMATION
                </span>

                <h2>
                  Zobot Resources Limited
                </h2>

                <p>
                  Get in touch with our team through any of
                  the contact channels below.
                </p>
              </div>

              {/* ADDRESS */}
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin size={23} />
                </div>

                <div>
                  <h3>Office Address</h3>

                  <p>
                    Ajasa Command Road & Owolabi Close,
                    Oke Odo, Lagos, Nigeria.
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Phone size={23} />
                </div>

                <div>
                  <h3>Telephone</h3>

                  <a href="tel:+2348036034685">
                    +234 803 603 4685
                  </a>

                  <a href="tel:+2348179512401">
                    +234 817 951 2401
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Mail size={23} />
                </div>

                <div>
                  <h3>Email Address</h3>

                  <a href="mailto:zobotresources@gmail.com">
                    zobotresources@gmail.com
                  </a>
                </div>
              </div>

              {/* DIRECT CONTACT CTA */}
              <div className="contact-direct-card">
                <MessageSquare size={27} />

                <h3>Prefer a direct conversation?</h3>

                <p>
                  Speak with our team about your project or
                  business requirements.
                </p>

                <a href="https://wa.me/2348036034685">
                  Chat with us on WhatsApp
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </aside>

            {/* ENQUIRY FORM */}
            <div className="contact-form-wrapper">
              <div className="contact-form-heading">
                <span className="section-label">
                  SEND AN ENQUIRY
                </span>

                <h2>How Can We Help You?</h2>

                <p>
                  Complete the form below and tell us a little
                  about what you need.
                </p>
              </div>

              <form
                className="contact-page-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="contact-fullname">
                      Full Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="contact-fullname"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-company">
                      Company Name
                    </label>

                    <input
                      type="text"
                      id="contact-company"
                      name="companyName"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="contact-email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-phone">
                      Phone Number <span>*</span>
                    </label>

                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-service">
                    Service of Interest <span>*</span>
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Oil & Gas Services">
                      Oil & Gas Services
                    </option>

                    <option value="Renewable Energy Solutions">
                      Renewable Energy Solutions
                    </option>

                    <option value="Solar & Inverter Systems">
                      Solar & Inverter Systems
                    </option>

                    <option value="Electrical Engineering">
                      Electrical Engineering
                    </option>

                    <option value="Engineering & Construction">
                      Engineering & Construction
                    </option>

                    <option value="Waste Management">
                      Waste Management
                    </option>

                    <option value="Import & Export">
                      Import & Export
                    </option>

                    <option value="Business Collaboration">
                      Business Collaboration
                    </option>

                    <option value="Other Enquiry">
                      Other Enquiry
                    </option>
                  </select>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-message">
                    Message <span>*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your project or enquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="contact-submit-button"
                >
                  Submit Enquiry
                  <Send size={18} />
                </button>

                <p className="contact-form-note">
                  <span>*</span> Required fields
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="contact-bottom-cta">
          <div className="container contact-bottom-content">
            <div>
              <span className="contact-eyebrow">
                ZOBOT RESOURCES LIMITED
              </span>

              <h2>
                Powering Progress.
                <span> Engineering the Future.</span>
              </h2>

              <p>
                We look forward to hearing from you and exploring
                opportunities to work together.
              </p>
            </div>

            <a
              href="mailto:zobotresources@gmail.com"
              className="contact-bottom-button"
            >
              Email Our Team
              <ArrowRight size={19} />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;
