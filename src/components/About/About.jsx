import { CheckCircle, Users, Target, Lightbulb, Award, Heart } from 'lucide-react';
import './About.scss';

const VALUES = [
  {
    icon: <Target size={18} />,
    title: 'Mission-Driven',
    desc: 'Every project driven by measurable business outcomes',
  },
  {
    icon: <Users size={18} />,
    title: 'People First',
    desc: 'Our team is our greatest asset and competitive edge',
  },
  {
    icon: <Lightbulb size={18} />,
    title: 'Innovation',
    desc: 'Staying ahead with cutting-edge technology adoption',
  },
  {
    icon: <Heart size={18} />,
    title: 'Partnership',
    desc: 'We grow when your business grows — always aligned',
  },
];

const STATS = [
  { label: '10+', sub: 'Years Experience' },
  { label: '500+', sub: 'Projects Done' },
  { label: '50+', sub: 'Team Members' },
  { label: '30+', sub: 'Countries Served' },
];

const CERTS = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'HIPAA Compliant',
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Content */}
        <div className="about-content">
          <div className="about-label">About Us</div>

          <h2 className="about-title">
            People. Passion. <em>Purpose.</em>
          </h2>

          <p className="about-text">
            At NEXAVATE Technologies, we believe a company is more than just an
            organization — it's a living body. While the company forms the body,
            our employees and customers are the soul that drives every decision
            we make.
          </p>

          <p className="about-text">
            Founded with a vision to democratize enterprise-grade technology,
            we specialize in building AI-first, scalable, and secure digital
            solutions that solve real business problems and deliver measurable ROI.
          </p>

          <div className="about-values">
            {VALUES.map((value) => (
              <div className="about-value-card" key={value.title}>
                <div className="about-value-icon">
                  {value.icon}
                </div>

                <div className="about-value-title">
                  {value.title}
                </div>

                <div className="about-value-desc">
                  {value.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="about-visual">
          <div className="about-visual-wrapper">

            {/* Stats */}
            <div className="about-stats-grid">
              {STATS.map((item) => (
                <div className="about-stat-card" key={item.label}>
                  <div className="about-stat-number">
                    {item.label}
                  </div>

                  <div className="about-stat-label">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="about-certifications">
              {CERTS.map((cert) => (
                <div className="about-cert-card" key={cert}>
                  <CheckCircle size={15} color="#000" />
                  {cert}
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className="about-badge">
              <div className="about-badge-icon">
                <Award size={20} />
              </div>

              <div>
                <div className="about-badge-title">
                  10+ Years of Excellence
                </div>

                <div className="about-badge-subtitle">
                  Trusted by 200+ global clients across 30+ countries
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}