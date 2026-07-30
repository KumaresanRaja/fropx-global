import { CheckCircle, Users, Target, Lightbulb, Award, Heart } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
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
  { label: '3+', sub: 'Years Experience' },
  { label: '10+', sub: 'Projects Done' },
  { label: '30+', sub: 'Team Members' },
  { label: '10+', sub: 'Countries Served' },
];

const CERTS = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'HIPAA Compliant',
];

export default function About() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Content */}
        <div className="about-content reveal reveal-left" ref={leftRef}>
          <div className="about-label">About Us</div>

          <h2 className="about-title">
            People. Passion. <em>Purpose.</em>
          </h2>

          <p className="about-text">
            At FROPX GlobalTech, we believe our greatest strength lies in our people and the relationships we build. Our employees are the driving force behind every innovation, bringing creativity, expertise, and dedication to solving complex business challenges. 
            We foster a culture of collaboration, continuous learning, and excellence, empowering our teams to grow professionally while creating meaningful technology that makes a real impact.
          </p>

          <p className="about-text">
            Our clients are more than customers—they are trusted partners in our journey. 
            By understanding their unique goals and challenges, we develop AI-powered, scalable, and secure digital solutions that deliver measurable business value. Built on trust, transparency, and long-term collaboration, every partnership reflects our commitment to helping businesses innovate faster, operate smarter, and achieve sustainable growth together.
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
        <div className="about-visual reveal reveal-right" ref={rightRef}>
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
                  3+ Years of Excellence
                </div>

                <div className="about-badge-subtitle">
                  Trusted by 10+ global clients across 5+ countries
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}