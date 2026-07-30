import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Quote, Sparkles, Building2, Calendar, Clock, MapPin, Layers, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEO/SEOHead';
import { CASE_STUDIES } from '../data/caseStudiesData';
import './CaseStudyDetailPage.scss';

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <>
        <Navbar />
        <main className="csd-not-found">
          <div className="csd-container">
            <h2>Case Study Not Found</h2>
            <p>The case study you are looking for does not exist or has been moved.</p>

            <button className="csd-back-btn" onClick={() => navigate('/projects')}>
              <ArrowLeft size={16} /> Back to All Case Studies
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Related Case Studies (other 3 from same category or general)
  const relatedStudies = CASE_STUDIES
    .filter((cs) => cs.id !== caseStudy.id)
    .slice(0, 3);

  // Schema.org TechArticle JSON-LD
  const schemaJSON = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': caseStudy.title,
    'description': caseStudy.shortDesc,
    'articleBody': `${caseStudy.challenge.summary} ${caseStudy.solution.summary} ${caseStudy.impact.summary}`,
    'author': {
      '@type': 'Organization',
      'name': 'FROPX GlobalTech',
      'url': 'https://fropx.com',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'FROPX GlobalTech',
    },
    'about': caseStudy.tags,
    'keywords': caseStudy.tags.join(', '),
  };

  return (
    <>
      <SEOHead
        title={`${caseStudy.title} | FROPX Case Study`}
        description={caseStudy.shortDesc}
        keywords={caseStudy.tags.join(', ')}
        canonicalUrl={window.location.href}
        schemaData={schemaJSON}
      />

      <Navbar />

      <main className="csd-main">
        {/* Top Breadcrumb & Hero */}
        <section className="csd-hero">
          <div className="csd-container">
            {/* Navigation Breadcrumb */}
            <div className="csd-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/projects">Case Studies</Link>
              <span>/</span>
              <span className="active">{caseStudy.client}</span>
            </div>

            <button className="csd-back-link" onClick={() => navigate('/projects')}>
              <ArrowLeft size={15} /> All Case Studies
            </button>

            <div className="csd-hero-badge">
              <span>{caseStudy.industry}</span>
              <span className="csd-badge-highlight">{caseStudy.highlightBadge}</span>
            </div>

            <h1 className="csd-title">{caseStudy.title}</h1>
            <p className="csd-subtitle">{caseStudy.shortDesc}</p>

            {/* Quick Meta Row */}
            <div className="csd-meta-row">
              <div className="csd-meta-item">
                <Building2 size={16} />
                <span>Client: <strong>{caseStudy.client}</strong></span>
              </div>
              <div className="csd-meta-item">
                <Calendar size={16} />
                <span>Year: <strong>{caseStudy.year}</strong></span>
              </div>
              <div className="csd-meta-item">
                <Clock size={16} />
                <span>Duration: <strong>{caseStudy.duration}</strong></span>
              </div>
              <div className="csd-meta-item">
                <MapPin size={16} />
                <span>Region: <strong>{caseStudy.location}</strong></span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Metrics Showcase Banner */}
        <section className="csd-metrics-banner">
          <div className="csd-container">
            <div className="csd-metrics-grid">
              {caseStudy.keyMetrics.map((m, idx) => (
                <div className="csd-metric-box" key={idx}>
                  <div className="csd-metric-value">{m.value}</div>
                  <div className="csd-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content & Sidebar Grid */}
        <section className="csd-content-section">
          <div className="csd-container csd-content-grid">
            
            {/* Left Main Article Column */}
            <article className="csd-article">
              
              {/* Executive Summary */}
              <div className="csd-block">
                <h2>Executive Summary</h2>
                <p>{caseStudy.fullDesc}</p>
              </div>

              {/* Challenge */}
              <div className="csd-block">
                <h2>The Business Challenge</h2>
                <p>{caseStudy.challenge.summary}</p>
                <div className="csd-bullet-box">
                  <h3>Key Pain Points Before Implementation</h3>
                  <ul>
                    {caseStudy.challenge.points.map((pt, i) => (
                      <li key={i}>
                        <span className="csd-dot"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Engineering Solution */}
              <div className="csd-block">
                <h2>Engineering Solution & Architecture</h2>
                <p>{caseStudy.solution.summary}</p>
                <div className="csd-bullet-box csd-solution-box">
                  <h3>Key Platform Capabilities Delivered</h3>
                  <ul>
                    {caseStudy.solution.points.map((pt, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} className="csd-check-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results & Impact */}
              <div className="csd-block">
                <h2>Business Impact & Measurable Outcomes</h2>
                <p>{caseStudy.impact.summary}</p>
                <div className="csd-bullet-box csd-impact-box">
                  <h3>Quantifiable Success Metrics</h3>
                  <ul>
                    {caseStudy.impact.points.map((pt, i) => (
                      <li key={i}>
                        <Sparkles size={18} className="csd-sparkle-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Client Testimonial */}
              {caseStudy.testimonial && (
                <div className="csd-testimonial-card">
                  <Quote size={28} className="csd-quote-mark" />
                  <p className="csd-quote-text">"{caseStudy.testimonial.quote}"</p>
                  <div className="csd-quote-by">
                    <strong>{caseStudy.testimonial.author}</strong>
                    <span>{caseStudy.testimonial.role}</span>
                  </div>
                </div>
              )}

              {/* CTA Banner */}
              <div className="csd-bottom-cta">
                <div className="csd-cta-text">
                  <h3>Want Similar Results for Your Business?</h3>
                  <p>Speak with our engineering experts to evaluate your solution architecture.</p>
                </div>
                <button className="csd-cta-btn" onClick={() => navigate('/contact-us')}>
                  Book Consultation <ArrowRight size={16} />
                </button>
              </div>

            </article>

            {/* Right Sticky Sidebar */}
            <aside className="csd-sidebar">
              <div className="csd-sidebar-card">
                <h3>Project Snapshot</h3>
                <div className="csd-side-list">
                  <div className="csd-side-item">
                    <span className="csd-side-label">Client</span>
                    <span className="csd-side-val">{caseStudy.client}</span>
                  </div>
                  <div className="csd-side-item">
                    <span className="csd-side-label">Industry</span>
                    <span className="csd-side-val">{caseStudy.industry}</span>
                  </div>
                  <div className="csd-side-item">
                    <span className="csd-side-label">Category</span>
                    <span className="csd-side-val">{caseStudy.category}</span>
                  </div>
                  <div className="csd-side-item">
                    <span className="csd-side-label">Timeline</span>
                    <span className="csd-side-val">{caseStudy.duration}</span>
                  </div>
                  <div className="csd-side-item">
                    <span className="csd-side-label">Primary Impact</span>
                    <span className="csd-side-val csd-highlight-text">{caseStudy.heroMetric.value} ({caseStudy.heroMetric.label})</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="csd-sidebar-card">
                <h3>Technologies Used</h3>
                <div className="csd-tech-tags">
                  {caseStudy.techStack.map((tech) => (
                    <span className="csd-tech-tag" key={tech}>
                      <Layers size={12} /> {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Widget */}
              <div className="csd-sidebar-cta">
                <h4>Have a Project in Mind?</h4>
                <p>Let's build scalable AI & cloud software tailored to your growth objectives.</p>
                <button onClick={() => navigate('/contact-us')}>
                  Get in Touch <ArrowRight size={14} />
                </button>
              </div>
            </aside>

          </div>
        </section>

        {/* Related Case Studies Grid */}
        <section className="csd-related-section">
          <div className="csd-container">
            <div className="csd-related-header">
              <h2>Explore More <em>Case Studies</em></h2>
              <button onClick={() => navigate('/projects')}>
                View All Projects <ArrowRight size={15} />
              </button>
            </div>

            <div className="csd-related-grid">
              {relatedStudies.map((rel) => (
                <div
                  className="csd-related-card"
                  key={rel.id}
                  onClick={() => navigate(`/projects/${rel.slug}`)}
                >
                  <div className="csd-rel-badge">{rel.industry}</div>
                  <h3 className="csd-rel-title">{rel.title}</h3>
                  <p className="csd-rel-desc">{rel.shortDesc}</p>
                  <div className="csd-rel-footer">
                    <span className="csd-rel-stat">{rel.heroMetric.value} {rel.heroMetric.label}</span>
                    <span className="csd-rel-link">Read Story <ExternalLink size={12} /></span>
                  </div>
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
