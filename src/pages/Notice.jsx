import React from 'react';
import Chip from '../components/Chip';
import SEO from '../components/SEO';

const Notice = () => {
  const notices = [
    { id: 1, date: 'May 20, 2024', category: 'Admission', type: 'NEW', title: 'Class 11th Admission Open for Session 2024-25', desc: 'Admissions are now open for all streams. Please apply online or visit the campus.', variant: 'new' },
    { id: 2, date: 'May 10, 2024', category: 'General', type: 'UPDATE', title: 'Summer Vacation starts from 15th May 2024', desc: 'The school will remain closed for summer break and reopen on 1st July 2024.', variant: 'update' },
    { id: 3, date: 'April 25, 2024', category: 'Event', type: 'EVENT', title: 'Annual Science Exhibition on 25th June', desc: 'All students are encouraged to participate. Register your projects with your class teacher.', variant: 'event' },
    { id: 4, date: 'April 10, 2024', category: 'Admission', type: 'UPDATE', title: 'Scholarship Test Results Announced', desc: 'The results for the entrance scholarship test are now live on the portal.', variant: 'update' },
    { id: 5, date: 'March 15, 2024', category: 'Event', type: 'NEW', title: 'Guest Lecture by Dr. Verma', desc: 'Join us for an inspiring session on modern physics in the main auditorium.', variant: 'new' },
    { id: 6, date: 'March 01, 2024', category: 'General', type: 'EVENT', title: 'Parent-Teacher Meeting', desc: 'The quarterly PTM is scheduled for all classes to discuss academic progress.', variant: 'event' },
    { id: 7, date: 'May 22, 2024', category: 'General', type: 'NEW', title: 'Campus Wi-Fi Upgrade', desc: 'The campus internet has been upgraded to gigabit speeds for all students.', variant: 'new' },
  ];

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
            padding: '24px',
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
                      <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                        <Chip variant={n.variant}>{n.type}</Chip>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: themeColor, textTransform: 'uppercase', letterSpacing: '1px' }}>
                          {n.category}
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
