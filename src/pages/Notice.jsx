import React, { useContext } from 'react';
import Chip from '../components/Chip';
import SEO from '../components/SEO';
import { SiteContentContext } from '../context/SiteContentContext';

const Notice = () => {
  const { content } = useContext(SiteContentContext);
  const notices = content.notices;

  const sortedNotices = [...notices].sort((a, b) => new Date(b.date) - new Date(a.date));

  const getCategoryColor = (category) => {
    if (category === 'Admission') return 'var(--color-orange)';
    if (category === 'Event') return 'var(--color-green)';
    return '#8e6ee8'; // General
  };

  return (
    <div className="notice-page bg-cream" style={{minHeight: '80vh', padding: '160px 0 120px'}}>
      <SEO 
        title="Notice Board" 
        description="Stay updated with the latest announcements, events, and admission alerts at Geeta Science Inter College." 
        keywords="college notices, admission alerts, events, Geeta Science Inter College updates" 
      />
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-navy mb-4">Notice Board</h1>
          <p className="section-subtitle">Stay updated with the latest announcements, events, and admission alerts.</p>
        </div>

        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div style={{
            backgroundColor: 'white', 
            borderRadius: 'var(--radius-xl)', 
            boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
            padding: '32px',
            maxHeight: '600px',
            overflowY: 'auto'
          }}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {sortedNotices.map((n, i) => {
                const themeColor = getCategoryColor(n.category);
                const isLast = i === sortedNotices.length - 1;
                return (
                  <div key={n.id} style={{
                    padding: '24px 0', 
                    display: 'flex',
                    flexDirection: 'column',
                    borderBottom: isLast ? 'none' : '1px solid var(--color-border)'
                  }}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <span style={{
                          display: 'block',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: n.variant === 'new' ? 'var(--color-green)' : n.variant === 'update' ? 'var(--color-orange)' : 'var(--color-yellow)',
                          flexShrink: 0
                        }}></span>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '0.5px' }}>
                          {n.type}
                        </span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', marginLeft: '4px' }}>
                          • {n.category}
                        </span>
                      </div>
                      <span className="text-muted" style={{fontSize: '13px', fontWeight: 500}}>{n.date}</span>
                    </div>
                    <h3 className="mb-2" style={{fontSize: '18px', color: 'var(--color-navy)'}}>{n.title}</h3>
                    <p className="text-muted" style={{fontSize: '14px', margin: 0, lineHeight: 1.5}}>{n.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
