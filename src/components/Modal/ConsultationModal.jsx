import { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, X, Zap, Shield, Clock, Users } from 'lucide-react';
import './ConsultationModal.scss';

const SERVICES_LIST = [
  'AI & Intelligent Systems',
  'Data Engineering & Analytics',
  'Cloud & DevOps',
  'Custom Software Development',
  'Automation & RPA',
  'Product Engineering',
  'Other / General Inquiry',
];

const PERKS = [
  { icon: <Zap size={14} />, text: 'Response within 24 hours' },
  { icon: <Shield size={14} />, text: 'No commitment required' },
  { icon: <Clock size={14} />, text: '30-min strategy session' },
  { icon: <Users size={14} />, text: 'Senior architect assigned' },
];

export default function ConsultationModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1800));
    setLoading(false);
    setSuccess(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSuccess(false), 300);
  };

  if (!open) return null;

  return (
    <div
      className="cm-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div className="cm-dialog">

        {/* Left Panel */}
        <div className="cm-left">
          <div className="cm-left-logo">
            <div className="cm-left-logo-icon">NX</div>
            <span>FROPX Global</span>
          </div>

          <div className="cm-left-badge">Free Consultation</div>

          <h2 className="cm-left-title">
            Let's Build Something <em>Great</em>
          </h2>

          <p className="cm-left-desc">
            Talk to a senior solutions architect about your project — completely free, no strings attached.
          </p>

          <div className="cm-perks">
            {PERKS.map((p) => (
              <div className="cm-perk" key={p.text}>
                <div className="cm-perk-icon">{p.icon}</div>
                {p.text}
              </div>
            ))}
          </div>

          <div className="cm-left-footer">
            Trusted by 200+ companies worldwide
          </div>
        </div>

        {/* Right Panel */}
        <div className="cm-right">
          <button className="cm-close" onClick={handleClose} aria-label="Close">
            <X size={16} />
          </button>

          {success ? (
            <div className="cm-success">
              <div className="cm-success-icon"><CheckCircle size={30} /></div>
              <div className="cm-success-title">Message Sent!</div>
              <div className="cm-success-text">Our team will get back to you within 24 hours.</div>
              <button className="cm-submit" onClick={handleClose}>Close</button>
            </div>
          ) : (
            <>
              <div className="cm-right-heading">Get in Touch</div>
              <p className="cm-subtitle">Fill in the details and we'll respond within 24 hours.</p>

              <form className="cm-form" onSubmit={handleSubmit}>
                <div className="cm-row">
                  <div className="cm-group">
                    <label className="cm-label">Full Name <span>*</span></label>
                    <input className="cm-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                  </div>
                  <div className="cm-group">
                    <label className="cm-label">Email <span>*</span></label>
                    <input className="cm-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required />
                  </div>
                </div>
                <div className="cm-row">
                  <div className="cm-group">
                    <label className="cm-label">Phone</label>
                    <input className="cm-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="cm-group">
                    <label className="cm-label">Company</label>
                    <input className="cm-input" type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your Company" />
                  </div>
                </div>
                <div className="cm-group">
                  <label className="cm-label">Service of Interest</label>
                  <select className="cm-select" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="cm-group">
                  <label className="cm-label">Requirements <span>*</span></label>
                  <textarea className="cm-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Describe your project, goals, or challenges..." required />
                </div>
                <button className="cm-submit" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : <><Send size={15} /> Send Message</>}
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
