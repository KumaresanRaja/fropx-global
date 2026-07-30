import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import CaseStudyModal from '../Modal/CaseStudyModal';
import { CASE_STUDIES } from '../../data/caseStudiesData';
import './Projects.scss';

export default function Projects() {
  const navigate = useNavigate();
  const ref = useScrollReveal();
  const [selectedModalStudy, setSelectedModalStudy] = useState(null);

  // Top 6 spotlight case studies for homepage
  const spotlightStudies = CASE_STUDIES.slice(0, 6);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner reveal" ref={ref}>
        {/* Header */}
        <div className="projects-header">
          <div>
            <div className="projects-label">Featured Case Studies</div>
            <h2 className="projects-title">
              Proven <em>Engineering Outcomes</em>
            </h2>
          </div>
          <button className="projects-view-all" onClick={() => navigate('/projects')}>
            Explore All Work <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Minimalist B2B Grid */}
        <div className="projects-grid">
          {spotlightStudies.map((p) => (
            <article
              key={p.id}
              className="projects-card"
              onClick={() => navigate(`/projects/${p.slug}`)}
            >
              {/* Top Meta */}
              <div className="projects-card-top">
                <span className="projects-card-industry">{p.industry}</span>
                <span className="projects-card-year">{p.year}</span>
              </div>

              {/* Title */}
              <h3 className="projects-card-title">{p.title}</h3>

              {/* Hero Metric Highlight */}
              <div className="projects-card-stat">
                <span className="projects-stat-val">{p.heroMetric.value}</span>
                <span className="projects-stat-lbl">{p.heroMetric.label}</span>
              </div>

              {/* Footer */}
              <div className="projects-card-footer">
                <span className="projects-card-client">{p.client}</span>
                <span className="projects-card-link">
                  Read Story <ArrowRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <CaseStudyModal
        caseStudy={selectedModalStudy}
        isOpen={Boolean(selectedModalStudy)}
        onClose={() => setSelectedModalStudy(null)}
      />
    </section>
  );
}
