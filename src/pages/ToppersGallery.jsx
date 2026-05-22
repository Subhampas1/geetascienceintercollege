import React, { useState, useContext } from 'react';
import Card from '../components/Card';
import Chip from '../components/Chip';
import { SiteContentContext } from '../context/SiteContentContext';
import SEO from '../components/SEO';
import './ToppersGallery.css';

const ToppersGallery = () => {
  const currentYear = new Date().getFullYear();
  const batches = [currentYear.toString(), (currentYear - 1).toString(), (currentYear - 2).toString()];
  
  const [activeBatch, setActiveBatch] = useState(batches[0]);
  const { content } = useContext(SiteContentContext);
  const toppers = content.toppers || [];

  return (
    <div className="toppers-page bg-cream">
      <SEO 
        title="Toppers Gallery" 
        description="Celebrate the outstanding achievements of our students. View our board exam toppers and success stories across all streams." 
        keywords="board toppers, student achievements, success stories, intermediate results" 
      />

      {/* Header */}
      <section className="toppers-header text-center">
        <div className="container">
          <h1 className="hero-title font-sans-display mb-4">
            Celebrating Our <span className="font-sans-display text-yellow">Academic Stars</span>
          </h1>
          <p className="hero-subtitle mb-8">
            Meet the brilliant minds who have set new benchmarks of excellence through their dedication and hard work.
          </p>
          
          <div className="batch-filters">
            {batches.map(batch => (
              <button 
                key={batch}
                className={`batch-btn ${activeBatch === batch ? 'active' : ''}`}
                onClick={() => setActiveBatch(batch)}
              >{batch} Batch</button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="toppers-grid-section">
        <div className="container">
          {toppers.filter(t => (t.batch || batches[0]) === activeBatch).length === 0 ? (
            <div className="empty-state text-center" style={{padding: '64px 0', opacity: 0.7}}>
              <span className="material-symbols-outlined mb-4" style={{fontSize: '48px', color: 'var(--color-text-muted)'}}>sentiment_dissatisfied</span>
              <h3 className="font-sans-display mb-2 text-navy">No Toppers Found</h3>
              <p className="text-muted">We haven't added the toppers for the {activeBatch} batch yet.</p>
            </div>
          ) : (
            <div className="toppers-card-grid">
              {toppers.filter(t => (t.batch || batches[0]) === activeBatch).map((topper, idx) => (
                <Card key={topper.id || idx} className="topper-card-full">
                  <div className="topper-card-header">
                    <div className={`topper-img-wrapper bg-${topper.color}-light`}>
                      <img 
                        src={topper.image} 
                        alt={topper.name} 
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(topper.name)}&background=random&color=fff&size=150`; }} 
                      />
                    </div>
                    <div className={`topper-rank-badge bg-${topper.color}`}>#{topper.rank}</div>
                  </div>
                  <div className="topper-card-body">
                    <h3 className="font-sans-display text-navy">{topper.name}</h3>
                    <p className="topper-stream">{topper.stream}</p>
                    <p className="topper-quote text-navy">{topper.quote}</p>
                    <div className="topper-scores">
                      <div className="score-pill">
                        <strong>{topper.aggregate}</strong> Aggregate
                      </div>
                      <div className="score-pill">
                        <strong>{topper.subject}</strong>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Legacy Section */}
      <section className="legacy-section">
        <div className="container">
          <div className="legacy-block bg-brown">
            <div className="legacy-content text-white">
              <Chip variant="event" className="bg-white text-brown mb-4">OUR PRIDE</Chip>
              <h2 className="font-sans-display mb-4" style={{fontSize: '40px'}}>Continuing the Legacy</h2>
              <p style={{opacity: 0.9}}>Year after year, our students outdo themselves, proving that our playful yet rigorous approach to education yields remarkable results on the state board level.</p>
            </div>
            <div className="legacy-stats">
              <Card className="stat-card">
                <h3 className="text-orange font-sans-display" style={{fontSize: '48px', marginBottom:'8px'}}>98.4%</h3>
                <p className="text-navy" style={{fontWeight:600}}>Average Board Score</p>
                <p className="text-muted" style={{fontSize:'12px'}}>Across all streams</p>
              </Card>
              <Card className="stat-card">
                <h3 className="text-green font-sans-display" style={{fontSize: '48px', marginBottom:'8px'}}>45+</h3>
                <p className="text-navy" style={{fontWeight:600}}>State Merit Ranks</p>
                <p className="text-muted" style={{fontSize:'12px'}}>In the past 5 years</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToppersGallery;
