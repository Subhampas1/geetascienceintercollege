import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Chip from '../components/Chip';
import Card from '../components/Card';
import { SiteContentContext } from '../context/SiteContentContext';
import './Home.css';

const Home = () => {
  const { content } = useContext(SiteContentContext);
  const homeData = content.home;

  const currentYear = new Date().getFullYear();
  const nextYearShort = (currentYear + 1).toString().slice(2);
  const sessionString = `${currentYear}-${nextYearShort}`;

  return (
    <div className="home-page">
      <SEO
        title="Welcome"
        description="Geeta Science Inter College is the premier destination for students aiming for excellence in Science and Commerce streams. Specialized coaching for JEE and NEET."
        keywords="best science college, Geeta Science Inter College, JEE preparation, NEET coaching, intermediate college"
      />
      {/* Hero Section */}
      <header className="hero-section">
        <div className="container hero-content">
          <div className="hero-text-col">
            <div className="hero-badge">
              <span className="material-symbols-outlined text-green" style={{ fontSize: '18px' }}>verified</span>
              <span className="badge-text">EXCELLENCE SINCE 2015</span>
            </div>
            <h1 className="hero-title font-sans-display">
              Where <span className="text-green">Learning</span> Feels Like a <span className="text-yellow">{homeData.heroTitleHighlight || 'Discovery'}</span>.
            </h1>
            <p className="hero-subtitle">
              {(() => {
                const text = homeData.heroSubtitle;
                const match = text.match(/(We don't just teach[;,] we inspire\.)/i);
                if (match) {
                  const parts = text.split(match[0]);
                  return (
                    <>
                      {parts[0]}
                      <span className="text-orange" style={{ fontWeight: 800 }}>We don't just teach, we inspire.</span>
                      {parts[1]}
                    </>
                  );
                }
                return text;
              })()}
            </p>
            <div className="hero-image-col mobile-hero-image">
              <img src="/hero-image.png" alt="Happy student representing various academic streams" className="hero-main-img" />
            </div>
            <div className="hero-actions">
              <Link to="/admissions" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="large">Start Your Application</Button>
              </Link>
              <Link to="/academics" style={{ textDecoration: 'none' }}>
                <Button variant="outline" size="large" className="bg-white">Explore Streams</Button>
              </Link>
            </div>
          </div>
          <div className="hero-image-col desktop-hero-image">
            <img src="/hero-image.png" alt="Happy student representing various academic streams" className="hero-main-img" />
          </div>
        </div>
      </header>

      {/* Notice Board */}
      <section className="notice-section">
        <div className="container notice-container">
          <div className="notice-header" style={{ gap: '12px' }}>
            <span className="material-symbols-outlined text-orange animate-campaign" style={{ fontSize: '28px' }}>campaign</span>
            <h2 className="font-sans-display" style={{ whiteSpace: 'nowrap' }}>
              Notice Board
            </h2>
          </div>
          <div className="notice-scroll-wrapper">
            <div className="notice-scroll-content">
              <div className="notice-item">
                <Chip variant="new" style={{ marginRight: '8px' }}>NEW</Chip>
                <div className="notice-content">
                  <span className="notice-bullet new"></span>
                  <p>Class 11th Admission Open for Session {sessionString}</p>
                </div>
              </div>
              <div className="notice-divider"></div>
              <div className="notice-item">
                <Chip variant="update" style={{ marginRight: '8px' }}>UPDATE</Chip>
                <div className="notice-content">
                  <span className="notice-bullet update"></span>
                  <p>Summer Vacation starts from 15th May {currentYear}</p>
                </div>
              </div>
              <div className="notice-divider"></div>
              <div className="notice-item">
                <Chip variant="event" style={{ marginRight: '8px' }}>EVENT</Chip>
                <div className="notice-content">
                  <span className="notice-bullet event"></span>
                  <p>Annual Science Exhibition on 25th June</p>
                </div>
              </div>
              <div className="notice-divider"></div>
              {/* Duplicates for infinite scrolling */}
              <div className="notice-item">
                <Chip variant="new" style={{ marginRight: '8px' }}>NEW</Chip>
                <div className="notice-content">
                  <span className="notice-bullet new"></span>
                  <p>Class 11th Admission Open for Session {sessionString}</p>
                </div>
              </div>
              <div className="notice-divider"></div>
              <div className="notice-item">
                <Chip variant="update" style={{ marginRight: '8px' }}>UPDATE</Chip>
                <div className="notice-content">
                  <span className="notice-bullet update"></span>
                  <p>Summer Vacation starts from 15th May {currentYear}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="notice-action">
            <Link to="/notices" className="see-all-pill">
              SEE ALL <span className="material-symbols-outlined" style={{ fontSize: '14px', marginLeft: '2px' }}>arrow_forward</span>
            </Link>
          </div>
          {/* Mobile Pagination Dots */}
          <div className="notice-mobile-pagination">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="material-symbols-outlined text-orange" style={{ fontSize: '16px' }}>arrow_forward_ios</span>
          </div>
        </div>
      </section>

      {/* Celebrating Excellence Section */}
      <section className="toppers-section bg-white">
        <div className="container text-center">
          <h2 className="section-title">Celebrating Excellence</h2>
          <div className="toppers-grid">
            <div className="topper-profile">
              <div className="topper-image-wrapper">
                <div className="topper-bg bg-green-light"></div>
                <div className="topper-img border-green" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                  <span className="material-symbols-outlined text-green animate-float-1" style={{ fontSize: '64px' }}>science</span>
                </div>
                <div className="topper-badge bg-green">#06</div>
              </div>
              <h3 className="font-sans-display">Science Stream</h3>
              <p>Outstanding achievement in the state-wide science evaluation board.</p>
            </div>
            <div className="topper-profile">
              <div className="topper-image-wrapper">
                <div className="topper-bg bg-orange-light"></div>
                <div className="topper-img border-orange" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                  <span className="material-symbols-outlined text-orange animate-float-2" style={{ fontSize: '64px' }}>trending_up</span>
                </div>
                <div className="topper-badge bg-orange">#11</div>
              </div>
              <h3 className="font-sans-display">Commerce Stream</h3>
              <p>Excellence in analytical studies and business accountancy.</p>
            </div>
            <div className="topper-profile">
              <div className="topper-image-wrapper">
                <div className="topper-bg bg-yellow-light"></div>
                <div className="topper-img border-yellow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                  <span className="material-symbols-outlined text-yellow animate-float-3" style={{ fontSize: '64px' }}>palette</span>
                </div>
                <div className="topper-badge bg-yellow">#13</div>
              </div>
              <h3 className="font-sans-display">Arts Stream</h3>
              <p>Distinguished performance in humanities and creative studies.</p>
            </div>
          </div>

          <div className="text-center mt-16" style={{ marginTop: '64px' }}>
            <Link to="/toppers" style={{ textDecoration: 'none' }}>
              <Button variant="outline" size="large" className="text-brown" style={{ borderColor: 'var(--color-brown-primary)' }}>See Our Toppers Gallery</Button>
            </Link>
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

      {/* About Section */}
      <section className="about-section bg-cream">
        <div className="container text-center">
          <Chip variant="event" className="bg-white text-brown mb-4" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>ABOUT US</Chip>
          <div className="mb-6">
            <img src="/logo.png" alt="Geeta Science Inter College" style={{ height: '160px', width: 'auto' }} onError={(e) => e.target.style.display = 'none'} />
          </div>
          <h2 className="section-title mb-6">Fostering Innovation & Character</h2>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.8', color: 'var(--color-navy)' }}>
            Established in 2015, Geeta Science Inter College has been a beacon of academic excellence. We believe in providing an environment where learning goes beyond textbooks. Our holistic approach integrates modern educational methodologies with traditional values, ensuring that our students are not just academically proficient but also ethically grounded. We take pride in our state-of-the-art facilities, experienced faculty, and a vibrant community that encourages every student to explore their true potential.
          </p>
          <blockquote className="text-orange font-sans-display" style={{ fontSize: '28px', margin: '40px auto 16px', fontStyle: 'italic', maxWidth: '800px', fontWeight: 600 }}>
            "हम अच्छे कर्मों का अनुसरण करें"
          </blockquote>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="director-section bg-purple">
        <div className="container director-container">
          <div className="director-header-mobile">
            <Chip variant="new" className="mb-4" style={{ display: 'inline-block' }}>LEADERSHIP</Chip>
            <h2 className="section-title text-center mb-6">Principal's Message</h2>
          </div>
          <div className="director-image-wrapper">
            <img src="/director.png" alt="Principal" className="director-img" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} />
          </div>
          <div className="director-content">
            <div className="director-header-desktop">
              <Chip variant="new" className="mb-4" style={{ display: 'inline-block' }}>LEADERSHIP</Chip>
              <h2 className="section-title text-left mb-6">Principal's Message</h2>
            </div>
            <div className="quote-mark">"</div>
            <p className="director-quote text-navy">
              "{homeData.principalQuote}"
            </p>
            <div className="director-author">
              <strong>{homeData.principalName}</strong>
              <p>Principal, Geeta Science Inter College</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-white">
        <div className="container">
          <div className="cta-block bg-brown">
            <div className="cta-content">
              <h2 className="text-white">Begin Your Success Story</h2>
              <p className="text-white" style={{ opacity: 0.9 }}>Enrollment is now open for the upcoming {sessionString} academic session at Geeta Science Inter College. Secure your seat in a world of discovery.</p>
            </div>
            <Link to="/admissions" style={{ textDecoration: 'none' }}>
              <Button variant="outline" size="large" className="text-brown" style={{ backgroundColor: 'white', border: 'none', padding: '16px 32px', borderRadius: 'var(--radius-full)' }}>
                Apply for Admission Now <span className="material-symbols-outlined ml-2" style={{ fontSize: '18px' }}>rocket_launch</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
