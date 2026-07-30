import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, ArrowRight, Filter, X } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEO/SEOHead';
import CaseStudyModal from '../components/Modal/CaseStudyModal';
import { CASE_STUDIES, CATEGORIES } from '../data/caseStudiesData';
import './ProjectsPage.scss';

const PER_PAGE = 6;

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalStudy, setSelectedModalStudy] = useState(null);

  // Filter case studies based on Category and Search Query
  const filteredProjects = useMemo(() => {
    return CASE_STUDIES.filter((cs) => {
      const matchesCategory =
        activeCategory === 'All' || cs.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        cs.title.toLowerCase().includes(query) ||
        cs.shortDesc.toLowerCase().includes(query) ||
        cs.client.toLowerCase().includes(query) ||
        cs.tags.some((t) => t.toLowerCase().includes(query)) ||
        cs.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredProjects.length / PER_PAGE);
  const paginatedProjects = useMemo(() => {
    return filteredProjects.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  }, [filteredProjects, page]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setPage(1);
  };

  // Schema.org JSON-LD ItemList
  const schemaItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'FROPX GlobalTech Case Studies',
    'description': 'Real-world case studies in AI Engineering, Data Lakehouses, Automation, and Cloud Modernization.',
    'itemListElement': CASE_STUDIES.map((cs, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': cs.title,
      'url': `${window.location.origin}/projects/${cs.slug}`,
    })),
  };

  return (
    <>
      <SEOHead
        title="Case Studies & Client Outcomes | FROPX GlobalTech"
        description="Explore FROPX GlobalTech enterprise case studies. Verified business impact in AI engineering, data lakehouses, cloud modernization, and automation."
        keywords="Case Studies, AI Case Studies, Data Lakehouse Portfolio, Cloud Migration Case Studies, Enterprise Automation"
        canonicalUrl={window.location.href}
        schemaData={schemaItemList}
      />

      <Navbar />

      <main className="pp-main">

        {/* Hero Section */}
        <section className="pp-hero">
          <div className="pp-container pp-hero-inner">
            <button className="pp-back-btn" onClick={() => navigate('/')}>
              <ArrowLeft size={15} /> Home
            </button>
            <div className="pp-label">Client Impact & Case Studies</div>
            <h1 className="pp-hero-title">
              Engineered Solutions. <em>Measurable Impact.</em>
            </h1>
            <p className="pp-hero-subtitle">
              Explore how FROPX partners with enterprise leaders to solve complex technical challenges and unlock tangible ROI through AI, data, and cloud architecture.
            </p>

            {/* Executive Stats Row */}
            <div className="pp-hero-stats">
              <div className="pp-hstat">
                <span className="pp-hstat-num">12+</span>
                <span className="pp-hstat-lbl">Enterprise Deployments</span>
              </div>
              <div className="pp-hstat">
                <span className="pp-hstat-num">98.5%</span>
                <span className="pp-hstat-lbl">Deployment Success Rate</span>
              </div>
              <div className="pp-hstat">
                <span className="pp-hstat-num">$18M+</span>
                <span className="pp-hstat-lbl">Quantifiable Value Generated</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search, Filter & Portfolio Grid Section */}
        <section className="pp-content">
          <div className="pp-container">

            {/* Controls Bar: Search + Filter Tabs */}
            <div className="pp-controls-bar">
              {/* Search Bar */}
              <div className="pp-search-box">
                <Search size={17} className="pp-search-icon" />
                <input
                  type="text"
                  placeholder="Filter case studies by industry, technology, or client..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  aria-label="Search case studies"
                />
                {searchQuery && (
                  <button className="pp-clear-btn" onClick={clearSearch} aria-label="Clear search">
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div className="pp-filters-wrapper">
                <div className="pp-filters">
                  {CATEGORIES.map((cat) => {
                    const count =
                      cat === 'All'
                        ? CASE_STUDIES.length
                        : CASE_STUDIES.filter((p) => p.category === cat).length;

                    return (
                      <button
                        key={cat}
                        className={`pp-filter-btn${activeCategory === cat ? ' active' : ''}`}
                        onClick={() => handleCategoryChange(cat)}
                      >
                        {cat} <span className="pp-count">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Results Info Bar */}
            <div className="pp-results-info">
              <span>
                Showing <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'case study' : 'case studies'}
                {activeCategory !== 'All' && ` in ${activeCategory}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </span>
              {(activeCategory !== 'All' || searchQuery) && (
                <button
                  className="pp-reset-btn"
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                >
                  <Filter size={12} /> Reset Filters
                </button>
              )}
            </div>

            {/* Sleek Minimalist Portfolio Grid */}
            {filteredProjects.length > 0 ? (
              <div className="pp-grid">
                {paginatedProjects.map((p) => (
                  <article
                    className="pp-card"
                    key={p.id}
                    onClick={() => navigate(`/projects/${p.slug}`)}
                  >
                    {/* Meta Row */}
                    <div className="pp-card-top">
                      <span className="pp-card-industry">{p.industry}</span>
                      <span className="pp-card-year">{p.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="pp-card-title">{p.title}</h3>

                    {/* Hero Metric Highlight */}
                    <div className="pp-card-stat">
                      <span className="pp-stat-val">{p.heroMetric.value}</span>
                      <span className="pp-stat-lbl">{p.heroMetric.label}</span>
                    </div>

                    {/* Footer */}
                    <div className="pp-card-footer">
                      <span className="pp-card-client">{p.client}</span>
                      <span className="pp-card-link">
                        Read Story <ArrowRight size={13} />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="pp-empty-state">
                <h3>No Matching Case Studies</h3>
                <p>Try refining your search terms or clearing current filter categories.</p>
                <button
                  className="pp-reset-btn-large"
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pp-pagination">
                <button
                  className="pp-page-btn"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  ← Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    className={`pp-page-btn${page === n ? ' active' : ''}`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ))}

                <button
                  className="pp-page-btn"
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next →
                </button>
              </div>
            )}

          </div>
        </section>

      </main>

      {/* Quick View Modal */}
      <CaseStudyModal
        caseStudy={selectedModalStudy}
        isOpen={Boolean(selectedModalStudy)}
        onClose={() => setSelectedModalStudy(null)}
      />

      <Footer />
    </>
  );
}
