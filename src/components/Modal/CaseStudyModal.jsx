import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ExternalLink, CheckCircle2, ArrowRight, Quote, Sparkles, Server, BarChart3, ShieldCheck } from 'lucide-react';
import './CaseStudyModal.scss';

export default function CaseStudyModal({ caseStudy, isOpen, onClose }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !caseStudy) return null;

  const handleFullDetailClick = () => {
    onClose();
    navigate(`/projects/${caseStudy.slug}`);
  };

  const handleContactClick = () => {
    onClose();
    navigate('/contact-us');
  };

  return (
    <div className="csm-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="csm-title">
      <div className="csm-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="csm-header">
          <div className="csm-header-meta">
            <span className="csm-badge">{caseStudy.industry}</span>
            <span className="csm-year">{caseStudy.year}</span>
            <span className="csm-duration">⏱️ {caseStudy.duration}</span>
          </div>
          <button className="csm-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Hero Title Area */}
        <div className="csm-hero">
          <div className="csm-highlight-badge">{caseStudy.highlightBadge}</div>
          <h2 id="csm-title" className="csm-title">{caseStudy.title}</h2>
          <p className="csm-client-line">Client: <strong>{caseStudy.client}</strong> ({caseStudy.location})</p>
          <p className="csm-short-desc">{caseStudy.shortDesc}</p>
        </div>

        {/* Stat Highlights Row */}
        <div className="csm-metrics-grid">
          {caseStudy.keyMetrics.map((m, idx) => (
            <div className="csm-metric-card" key={idx}>
              <div className="csm-metric-val">{m.value}</div>
              <div className="csm-metric-lbl">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Selector */}
        <div className="csm-tabs">
          <button
            className={`csm-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Sparkles size={14} /> Overview & Solution
          </button>
          <button
            className={`csm-tab ${activeTab === 'challenge' ? 'active' : ''}`}
            onClick={() => setActiveTab('challenge')}
          >
            <ShieldCheck size={14} /> Challenge
          </button>
          <button
            className={`csm-tab ${activeTab === 'impact' ? 'active' : ''}`}
            onClick={() => setActiveTab('impact')}
          >
            <BarChart3 size={14} /> Results & Impact
          </button>
          <button
            className={`csm-tab ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            <Server size={14} /> Tech Stack
          </button>
        </div>

        {/* Tab Body */}
        <div className="csm-body">
          {activeTab === 'overview' && (
            <div className="csm-tab-content">
              <h3>Solution Overview</h3>
              <p>{caseStudy.solution.summary}</p>
              <ul className="csm-list">
                {caseStudy.solution.points.map((pt, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="csm-icon-check" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'challenge' && (
            <div className="csm-tab-content">
              <h3>The Challenge</h3>
              <p>{caseStudy.challenge.summary}</p>
              <ul className="csm-list">
                {caseStudy.challenge.points.map((pt, i) => (
                  <li key={i}>
                    <span className="csm-bullet-point">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="csm-tab-content">
              <h3>Business Impact & Measurable ROI</h3>
              <p>{caseStudy.impact.summary}</p>
              <ul className="csm-list">
                {caseStudy.impact.points.map((pt, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="csm-icon-check" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="csm-tab-content">
              <h3>Architecture & Technology Stack</h3>
              <div className="csm-tech-pills">
                {caseStudy.techStack.map((tech) => (
                  <span className="csm-tech-pill" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial snippet */}
          {caseStudy.testimonial && (
            <div className="csm-testimonial">
              <Quote size={20} className="csm-quote-icon" />
              <p className="csm-quote-text">"{caseStudy.testimonial.quote}"</p>
              <div className="csm-quote-author">
                <strong>{caseStudy.testimonial.author}</strong> — {caseStudy.testimonial.role}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="csm-footer">
          <button className="csm-btn-secondary" onClick={handleFullDetailClick}>
            View Full Case Study Page <ExternalLink size={14} />
          </button>
          <button className="csm-btn-primary" onClick={handleContactClick}>
            Request Similar Solution <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
