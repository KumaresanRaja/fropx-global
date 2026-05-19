import { Star, Quote } from 'lucide-react';
import './Testimonials.scss';

const TESTIMONIALS = [
  {
    id: 1,
    text: "NEXAVATE transformed our data infrastructure completely. What used to take weeks of manual reporting now runs automatically in minutes. The ROI was evident within the first quarter.",
    name: 'Alexandra Chen',
    role: 'CTO, DataFlow Analytics',
    rating: 5,
    featured: false,
  },
  {
    id: 2,
    text: "The AI agent platform they built for us is nothing short of remarkable. Our customer service automation handles 70% of inquiries without human intervention, and satisfaction scores are actually up.",
    name: 'Marcus Williams',
    role: 'VP Engineering, NovaTech Solutions',
    rating: 5,
    featured: true,
  },
  {
    id: 3,
    text: "Working with NEXAVATE feels like having a senior engineering team embedded in your company. They understand the business context, not just the technical requirements.",
    name: 'Priya Sharma',
    role: 'CEO, HealthSync Platforms',
    rating: 5,
    featured: false,
  },
  {
    id: 4,
    text: "Their cloud migration project was flawlessly executed. Zero downtime, full data integrity, and we're now saving 45% on infrastructure costs. Exceptional team.",
    name: 'James O\'Brien',
    role: 'Director of IT, GlobalRetail Corp',
    rating: 5,
    featured: false,
  },
  {
    id: 5,
    text: "The automation suite they delivered saves my finance team 400+ hours monthly. Every bot works exactly as designed. The quality of their code and documentation is outstanding.",
    name: 'Sophie Laurent',
    role: 'CFO, Meridian Financial Group',
    rating: 5,
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        {/* Header */}
        <div className="testimonials__header">
          <div className="testimonials__label">Client Reviews</div>
          <h2 className="testimonials__title">
            What Our Clients <em>Say</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className={`testimonials__card${t.featured ? ' testimonials__card--featured' : ''}`}
            >
              <Quote size={24} className="testimonials__quote-icon" />

              <p className="testimonials__text">{t.text}</p>

              <div className="testimonials__rating">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonials__author-name">{t.name}</div>
                  <div className="testimonials__author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
