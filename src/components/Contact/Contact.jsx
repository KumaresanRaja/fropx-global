import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
} from 'lucide-react';

import './Contact.scss';

const SERVICES_LIST = [
  'AI & Intelligent Systems',
  'Data Engineering & Analytics',
  'Cloud & DevOps',
  'Custom Software Development',
  'Automation & RPA',
  'Product Engineering',
  'Other / General Inquiry',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Simulated submission
    await new Promise((res) => setTimeout(res, 1800));

    setLoading(false);
    setSuccess(true);
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-background">
        <div className="contact-background-grid" />
      </div>

      <div className="contact-container">

        {/* Info */}
        <div className="contact-info">

          <div className="contact-label">
            Get in Touch
          </div>

          <h2 className="contact-title">
            Let&apos;s Build Something <em>Great Together</em>
          </h2>

          <p className="contact-subtitle">
            Ready to transform your business with cutting-edge technology?
            Our experts are here to guide you from strategy to execution.
            Get your free consultation today.
          </p>

          <div className="contact-details">

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Mail size={18} />
              </div>

              <div>
                <div className="contact-detail-label">
                  Email
                </div>

                <div className="contact-detail-value">
                  contact@nexavate.com
                </div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Phone size={18} />
              </div>

              <div>
                <div className="contact-detail-label">
                  Phone
                </div>

                <div className="contact-detail-value">
                  +1 (555) 123-4567
                </div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <MapPin size={18} />
              </div>

              <div>
                <div className="contact-detail-label">
                  Office
                </div>

                <div className="contact-detail-value">
                  San Francisco, CA — New York, NY — London, UK
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrapper">

          {success ? (
            <div className="contact-success-box">

              <div className="contact-success-icon">
                <CheckCircle size={28} />
              </div>

              <div className="contact-success-title">
                Message Sent!
              </div>

              <div className="contact-success-text">
                Thank you for reaching out. Our team will get back
                to you within 24 hours.
              </div>

            </div>
          ) : (
            <>
              <div className="contact-form-title">
                Free Consultation
              </div>

              <div className="contact-form-subtitle">
                Fill in the form and we&apos;ll respond within 24 hours
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-row">

                  <div className="contact-form-group">
                    <label className="contact-input-label">
                      Full Name <span>*</span>
                    </label>

                    <input
                      className="contact-input"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-input-label">
                      Email <span>*</span>
                    </label>

                    <input
                      className="contact-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                </div>

                <div className="contact-form-row">

                  <div className="contact-form-group">
                    <label className="contact-input-label">
                      Phone
                    </label>

                    <input
                      className="contact-input"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-input-label">
                      Company
                    </label>

                    <input
                      className="contact-input"
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>

                </div>

                <div className="contact-form-group">
                  <label className="contact-input-label">
                    Service of Interest
                  </label>

                  <select
                    className="contact-select"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select a service...
                    </option>

                    {SERVICES_LIST.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-form-group">
                  <label className="contact-input-label">
                    Tell us about your requirements <span>*</span>
                  </label>

                  <textarea
                    className="contact-textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project, goals, timeline, or any specific challenges you're facing..."
                    required
                  />
                </div>

                <button
                  className="contact-submit-button"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>Sending Message...</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            </>
          )}

        </div>

      </div>
    </section>
  );
}