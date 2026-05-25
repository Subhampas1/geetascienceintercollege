import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { SiteContentContext } from '../context/SiteContentContext';
import './Academics.css';

const Academics = () => {
  const { content } = useContext(SiteContentContext);
  const academicsData = content.academics;
  return (
    <div className="academics-page bg-cream">
      <SEO 
        title="Academics & Streams" 
        description="Discover our Science, Commerce, and Arts streams. We provide world-class education with integrated JEE and NEET competitive exam support." 
        keywords="Science stream, Commerce stream, Arts stream, JEE coaching, NEET coaching, intermediate syllabus" 
      />
      
      {/* Header Section */}
      <section className="academics-header text-center bg-cream">
        <div className="container">
          <h1 className="hero-title font-sans-display" style={{ marginBottom: '16px' }}>
            Discover Your <span className="font-sans-display text-orange">{academicsData.heroTitleHighlight || 'Brilliant'}</span> {academicsData.heroTitleRest || 'Future'}
          </h1>
          <p className="hero-subtitle">
            {academicsData.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Streams Grid */}
      <section className="streams-bento-section bg-cream">
        <div className="container">
          <div className="bento-grid">
            
            <div className="streams-scroll-container">
              {/* Science Card */}
              <Card className="stream-vertical-card bg-white">
              <div className="stream-vertical-graphic" style={{ background: 'linear-gradient(135deg, rgba(43, 181, 133, 0.05), rgba(43, 181, 133, 0.2))' }}>
                <div className="glow-circle" style={{ background: 'var(--color-green)' }}></div>
                <span className="material-symbols-outlined main-icon text-green icon-no-select" aria-hidden="true">science</span>
              </div>
              <div className="stream-vertical-content">
                <div className="stream-vertical-badge" style={{ color: 'var(--color-green)', backgroundColor: 'rgba(43, 181, 133, 0.1)' }}>INNOVATORS</div>
                <h3 className="text-navy" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', marginBottom: '12px' }}>Science Stream</h3>
                <p className="text-muted" style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>{academicsData.scienceDesc}</p>
                <div className="stream-vertical-actions">
                  <div className="stream-vertical-pill">PCMB / PCM / PCB</div>
                  <div className="stream-vertical-pill">Bio-Sci & Engineering</div>
                </div>
                <Link to="/admissions?stream=science#apply-form" style={{ marginTop: '24px', textDecoration: 'none' }}>
                  <Button variant="orange" size="medium" style={{ width: '100%', borderRadius: 'var(--radius-full)' }}>Apply Now</Button>
                </Link>
              </div>
            </Card>

            {/* Commerce Card */}
            <Card className="stream-vertical-card bg-white">
              <div className="stream-vertical-graphic" style={{ background: 'linear-gradient(135deg, rgba(240, 139, 58, 0.05), rgba(240, 139, 58, 0.2))' }}>
                <div className="glow-circle" style={{ background: 'var(--color-orange)' }}></div>
                <span className="material-symbols-outlined main-icon text-orange icon-no-select" aria-hidden="true">shopping_cart</span>
              </div>
              <div className="stream-vertical-content">
                <div className="stream-vertical-badge" style={{ color: 'var(--color-orange)', backgroundColor: 'rgba(240, 139, 58, 0.1)' }}>STRATEGISTS</div>
                <h3 className="text-navy" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', marginBottom: '12px' }}>Commerce</h3>
                <p className="text-muted" style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>{academicsData.commerceDesc}</p>
                <div className="stream-vertical-actions">
                  <div className="stream-vertical-pill">Accountancy & Business</div>
                  <div className="stream-vertical-pill">Micro & Macro Economics</div>
                </div>
                <Link to="/admissions?stream=commerce#apply-form" style={{ marginTop: '24px', textDecoration: 'none' }}>
                  <Button variant="orange" size="medium" style={{ width: '100%', borderRadius: 'var(--radius-full)' }}>Apply Now</Button>
                </Link>
              </div>
            </Card>

            {/* Arts Card */}
            <Card className="stream-vertical-card bg-white">
              <div className="stream-vertical-graphic" style={{ background: 'linear-gradient(135deg, rgba(142, 110, 232, 0.05), rgba(142, 110, 232, 0.2))' }}>
                <div className="glow-circle" style={{ background: '#8e6ee8' }}></div>
                <span className="material-symbols-outlined main-icon icon-no-select" style={{ color: '#8e6ee8' }} aria-hidden="true">theater_comedy</span>
              </div>
              <div className="stream-vertical-content">
                <div className="stream-vertical-badge" style={{ color: '#8e6ee8', backgroundColor: 'rgba(142, 110, 232, 0.1)' }}>CREATIVES</div>
                <h3 className="text-navy" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', marginBottom: '12px' }}>Arts & Humanities</h3>
                <p className="text-muted" style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>{academicsData.artsDesc}</p>
                <div className="stream-vertical-actions">
                  <div className="stream-vertical-pill">Sociology & Psychology</div>
                  <div className="stream-vertical-pill">Literature</div>
                </div>
                <Link to="/admissions?stream=arts#apply-form" style={{ marginTop: '24px', textDecoration: 'none' }}>
                  <Button variant="orange" size="medium" style={{ width: '100%', borderRadius: 'var(--radius-full)' }}>Apply Now</Button>
                </Link>
              </div>
              </Card>
            </div>

            {/* Competitive Exam Support Card */}
            <Card className="competitive-support-card bg-white">
              <div className="competitive-content">
                <div className="competitive-badge" style={{ backgroundColor: 'rgba(240, 139, 58, 0.1)', color: 'var(--color-orange)' }}>EXAM EXCELLENCE</div>
                <h2 className="text-navy" style={{ fontFamily: 'var(--font-serif)' }}>JEE & NEET Support</h2>
                <p className="text-muted">Beyond regular classes, we provide specialized JEE and NEET coaching modules. Our curriculum is perfectly aligned with competitive exam patterns to ensure 100% confidence.</p>
                <div className="competitive-actions">
                  <div className="competitive-pill" style={{ border: '1px solid var(--color-border)' }}>
                    <span className="material-symbols-outlined">menu_book</span> JEE Prep
                  </div>
                  <div className="competitive-pill" style={{ border: '1px solid var(--color-border)' }}>
                    <span className="material-symbols-outlined">edit_document</span> NEET Prep
                  </div>
                </div>
              </div>
              <div className="competitive-graphic">
                <div className="glow-circle"></div>
                <span className="material-symbols-outlined main-icon text-orange">school</span>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* The Advantage */}
      <section className="advantage-section bg-white">
        <div className="container">
          <h2 className="section-title text-center">The Advantage</h2>
          <div className="advantage-grid">
            <div className="advantage-item">
              <span className="material-symbols-outlined text-brown mb-4" style={{ fontSize: '32px' }}>calendar_month</span>
              <h4 className="font-sans-display">Enrichment Classes</h4>
              <p>Consistent structure of daily sessions ensuring full syllabus coverage with time for revision.</p>
            </div>
            <div className="advantage-item">
              <span className="material-symbols-outlined text-green mb-4" style={{ fontSize: '32px' }}>forum</span>
              <h4 className="font-sans-display">Doubt Clearing</h4>
              <p>Dedicated evening sessions for one-on-one interaction and concept clarification.</p>
            </div>
            <div className="advantage-item">
              <span className="material-symbols-outlined text-orange mb-4" style={{ fontSize: '32px' }}>menu_book</span>
              <h4 className="font-sans-display">Competitive Exams</h4>
              <p>Intensive coaching specifically designed for JEE and NEET excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section bg-white text-center">
        <div className="container">
          <h2 className="font-sans-display text-navy mb-4" style={{ fontSize: '36px', lineHeight: 1.2 }}>
            No Question Left <span className="font-sans-display text-green">Unanswered</span>
          </h2>
          <p className="mb-12" style={{ maxWidth: '600px', margin: '0 auto 48px', color: 'var(--color-text-muted)' }}>
            Our "Doubt-Clearing Sessions" are the heartbeat of our academic excellence. We believe that every question is a stepping stone to mastery.
          </p>

          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            <div className="masonry-card" style={{ padding: '32px' }}>
              <span className="material-symbols-outlined text-green mb-4" style={{ fontSize: '32px' }}>forum</span>
              <h5 className="font-sans-display" style={{ fontSize: '18px', margin: 0 }}>1 on 1 Guidance</h5>
            </div>
            <div className="masonry-card" style={{ padding: '32px' }}>
              <span className="material-symbols-outlined text-brown mb-4" style={{ fontSize: '32px' }}>schedule</span>
              <h5 className="font-sans-display" style={{ fontSize: '18px', margin: 0 }}>24/7 Digital Portal</h5>
            </div>
            <div className="masonry-card" style={{ padding: '32px' }}>
              <span className="material-symbols-outlined text-orange mb-4" style={{ fontSize: '32px' }}>groups</span>
              <h5 className="font-sans-display" style={{ fontSize: '18px', margin: 0 }}>Remedial Classes</h5>
            </div>
            <div className="masonry-card" style={{ padding: '32px' }}>
              <span className="material-symbols-outlined text-navy mb-4" style={{ fontSize: '32px' }}>lightbulb</span>
              <h5 className="font-sans-display" style={{ fontSize: '18px', margin: 0 }}>Concept Clinics</h5>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="cta-section bg-white" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-block text-center" style={{ backgroundColor: '#F4F0EA', flexDirection: 'column', padding: '80px 40px' }}>
            <h2 className="text-navy font-sans-display" style={{ fontSize: '36px', marginBottom: '16px' }}>Ready to start your journey?</h2>
            <p className="text-muted" style={{ maxWidth: '500px', margin: '0 auto 40px' }}>Join the community of explorers at Geeta Science Inter College and unlock your full potential.</p>
            <div className="academics-cta-actions">
              <Link to="#" style={{ textDecoration: 'none', width: '100%' }}>
                <Button variant="primary" size="large" className="bg-orange text-white academics-cta-btn" style={{ border: 'none' }}>Brochure</Button>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none', width: '100%' }}>
                <Button variant="outline" size="large" className="text-navy academics-cta-btn" style={{ borderColor: 'var(--color-border)' }}>Schedule a Visit</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
