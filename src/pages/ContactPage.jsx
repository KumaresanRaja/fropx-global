import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Send, CheckCircle,
  ArrowLeft, Clock, MessageSquare, Zap,
  ChevronDown, ChevronUp, Calendar, Globe,
} from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './ContactPage.scss';

const SERVICES_LIST = [
  'AI & Intelligent Systems',
  'Data Engineering & Analytics',
  'Cloud & DevOps',
  'Custom Software Development',
  'Automation & RPA',
  'Product Engineering',
  'Product Data Management',
  'Supply Chain',
];

const PROCESS_STEPS = [
  {
    step: '01',
    icon: <MessageSquare size={20} />,
    title: 'Submit Your Inquiry',
    desc: 'Fill out the form with your project details and requirements.',
  },
  {
    step: '02',
    icon: <Clock size={20} />,
    title: 'We Respond in 24hrs',
    desc: 'Our team reviews your request and reaches out within one business day.',
  },
  {
    step: '03',
    icon: <Calendar size={20} />,
    title: 'Free Strategy Call',
    desc: 'A 30-minute discovery call to understand your goals and challenges.',
  },
  {
    step: '04',
    icon: <Zap size={20} />,
    title: 'Proposal & Kickoff',
    desc: 'Receive a tailored proposal and start building within days.',
  },
];

const OFFICES = [
  {
    city: 'Dharmapuri',
    country: 'India',
    address: 'Marandahalli,Palacode',
    timezone: 'IST (UTC+5:30)',
    flag: 'IN',
  }
];

const FAQS = [
  {
    q: 'How quickly can you start on a project?',
    a: 'We can typically onboard and begin within 5–7 business days after the proposal is signed. For urgent projects, we offer expedited kickoffs.',
  },
  {
    q: 'Do you work with startups or only enterprises?',
    a: 'We work with both. From early-stage startups building their first MVP to Fortune 500 enterprises modernizing legacy systems — our engagement models are flexible.',
  },
  {
    q: "What does the free consultation include?",
    a: "Our free consultation is designed to understand your business, challenges, and goals. We analyze your current processes, identify opportunities for improvement, and recommend the right technology solutions, architecture, and digital strategy to help your business grow—completely free, with no obligation."
  },
  {
    q: 'Do you offer fixed-price or time & material contracts?',
    a: "Both. We offer fixed-price for well-defined scopes and T&M for evolving or exploratory projects. We'll recommend the best fit during the strategy call.",
  },
  {
    q: 'Can you work with our existing in-house team?',
    a: 'Absolutely. We frequently operate as an embedded extension of client engineering teams, adapting to your workflows, tools, and communication style.',
  },
];

export default function ContactPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1800));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <>
      <Navbar isContactPage />
      <main className="cp-main">

        {/* Hero Banner */}
        <section className="cp-hero">
          
          <div className="cp-container cp-hero-inner">
            <button className="cp-back-btn" onClick={() => navigate(-1)}>
              <ArrowLeft size={15} /> Back to Home
            </button>
            <div className="cp-label">Contact Us</div>
            <h1 className="cp-hero-title">
              Let&apos;s Build Something <em>Great Together</em>
            </h1>
            <p className="cp-hero-subtitle">
              Ready to transform your business? Our experts are here to guide you from strategy to execution.
            </p>
            <div className="cp-hero-badges">
              <span><CheckCircle size={13} /> Free Consultation</span>
              <span><Clock size={13} /> 24hr Response</span>
              <span><Globe size={13} /> Global Team</span>
            </div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="cp-contact">
          
          <div className="cp-container cp-contact-grid">

            <div className="cp-info">
              <div className="cp-label">Get in Touch</div>
              <h2 className="cp-info-title">We&apos;d Love to <em>Hear From You</em></h2>
              <p className="cp-info-text">
                Whether you have a project in mind, a question about our services, or just want to explore possibilities — reach out and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="cp-details">
                {[
                  { icon: <Mail size={18} />, label: 'Email', value: 'contact@fropxglobal.com' },
                  { icon: <Phone size={18} />, label: 'Phone', value: '+91 8248981175' },
                  { icon: <MapPin size={18} />, label: 'Offices', value: 'Dharmapuri · Tamil Nadu · India' },
                ].map((d) => (
                  <div className="cp-detail-item" key={d.label}>
                    <div className="cp-detail-icon">{d.icon}</div>
                    <div>
                      <div className="cp-detail-label">{d.label}</div>
                      <div className="cp-detail-value">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cp-form-wrapper">
              {success ? (
                <div className="cp-success">
                  <div className="cp-success-icon"><CheckCircle size={28} /></div>
                  <div className="cp-success-title">Message Sent!</div>
                  <div className="cp-success-text">Our team will get back to you within 24 hours.</div>
                  <button className="cp-success-back" onClick={() => setSuccess(false)}>Send Another</button>
                </div>
              ) : (
                <>
                  <div className="cp-form-title">Free Consultation</div>
                  <div className="cp-form-subtitle">Fill in the form and we&apos;ll respond within 24 hours</div>
                  <form className="cp-form" onSubmit={handleSubmit}>
                    <div className="cp-form-row">
                      <div className="cp-form-group">
                        <label className="cp-input-label">Full Name <span>*</span></label>
                        <input className="cp-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                      </div>
                      <div className="cp-form-group">
                        <label className="cp-input-label">Email <span>*</span></label>
                        <input className="cp-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required />
                      </div>
                    </div>
                    <div className="cp-form-row">
                      <div className="cp-form-group">
                        <label className="cp-input-label">Phone</label>
                        <input className="cp-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="cp-form-group">
                        <label className="cp-input-label">Company</label>
                        <input className="cp-input" type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your Company" />
                      </div>
                    </div>
                    <div className="cp-form-group">
                      <label className="cp-input-label">Service of Interest</label>
                      <select className="cp-select" name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="cp-form-group">
                      <label className="cp-input-label">Tell us about your requirements <span>*</span></label>
                      <textarea className="cp-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Describe your project, goals, timeline, or challenges..." required />
                    </div>
                    <button className="cp-submit" type="submit" disabled={loading}>
                      {loading ? 'Sending...' : <><Send size={16} /> Send Message</>}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="cp-process">
          <div className="cp-container">
            <div className="cp-label">How It Works</div>
            <h2 className="cp-section-title">From Inquiry to <em>Kickoff</em></h2>
            <div className="cp-process-grid">
              {PROCESS_STEPS.map((s, i) => (
                <div className="cp-process-card" key={s.step}>
                  <div className="cp-process-step">{s.step}</div>
                  <div className="cp-process-icon">{s.icon}</div>
                  <div className="cp-process-title">{s.title}</div>
                  <div className="cp-process-desc">{s.desc}</div>
                  {i < PROCESS_STEPS.length - 1 && <div className="cp-process-arrow">→</div>}
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* FAQ */}
        <section className="cp-faq">
          <div className="cp-container cp-faq-inner">
            <div className="cp-faq-left">
              <div className="cp-label">FAQ</div>
              <h2 className="cp-section-title">Common <em>Questions</em></h2>
              <p className="cp-faq-sub">
                Can&apos;t find your answer?{' '}
                <a href="mailto:contact@fropxglobal.com">Email us directly.</a>
              </p>
            </div>
            <div className="cp-faq-list">
              {FAQS.map((faq, i) => (
                <div className={`cp-faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                  <button className="cp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openFaq === i && <div className="cp-faq-a">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
