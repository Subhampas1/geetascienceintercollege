import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { SiteContentContext } from '../context/SiteContentContext';

const SupportPage = ({ title }) => {
  const { content } = useContext(SiteContentContext);
  const supportData = content.support;

  const renderContent = () => {
    switch (title) {
      case 'Career Guidance':
        return (
          <div className="support-content" style={{maxWidth: '800px'}}>
            <h3 className="mb-4" style={{fontSize: '24px'}}>Your Future, Our Priority</h3>
            <p style={{marginBottom: '24px', lineHeight: 1.8}}>
              {supportData.careerGuidance !== "Career Guidance Content Here" ? supportData.careerGuidance : "At Geeta Science Inter College, education goes beyond the syllabus. Our dedicated Career Guidance cell exists to help students navigate the complex choices between engineering (JEE), medical (NEET), basic sciences, and humanities."}
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', margin: '48px 0'}}>
              <div className="bg-white" style={{padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)'}}>
                <span className="material-symbols-outlined text-orange mb-2" style={{fontSize: '32px'}}>psychology</span>
                <h4 style={{fontSize: '18px', marginBottom: '8px'}}>1-on-1 Mentorship</h4>
                <p className="text-muted" style={{fontSize: '14px'}}>Personalized counseling sessions to identify strengths and map out actionable career paths.</p>
              </div>
              <div className="bg-white" style={{padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)'}}>
                <span className="material-symbols-outlined text-green mb-2" style={{fontSize: '32px'}}>record_voice_over</span>
                <h4 style={{fontSize: '18px', marginBottom: '8px'}}>Expert Seminars</h4>
                <p className="text-muted" style={{fontSize: '14px'}}>Regular workshops with industry experts, doctors, and engineers to provide real-world insights.</p>
              </div>
            </div>

            <h3 className="mb-4" style={{fontSize: '24px'}}>Need Advice?</h3>
            <p style={{marginBottom: '32px', lineHeight: 1.8}}>
              Are you confused about choosing between PCM and PCB? Unsure about the latest exam patterns? Our counselors are here to help.
            </p>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <Button variant="primary">Book a Counseling Session</Button>
            </Link>
          </div>
        );

      case 'Privacy Policy':
        return (
          <div className="support-content" style={{maxWidth: '800px', lineHeight: 1.8}}>
            <p className="text-muted mb-6">Last updated: May 2024</p>
            <div style={{whiteSpace: 'pre-line'}}>
              {supportData.privacyPolicy !== "Privacy Policy Content Here" ? supportData.privacyPolicy : `1. Information We Collect
We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us, or apply for admissions.

2. How We Use Your Information
We use the information we collect to process admission applications, send administrative information to you, and respond to your inquiries.

3. Data Security
We have implemented appropriate technical and organizational security measures.`}
            </div>
          </div>
        );

      case 'Terms of Service':
        return (
          <div className="support-content" style={{maxWidth: '800px', lineHeight: 1.8}}>
            <p className="text-muted mb-6">Effective Date: January 2024</p>
            <div style={{whiteSpace: 'pre-line'}}>
              {supportData.termsOfService !== "Terms of Service Content Here" ? supportData.termsOfService : `1. Acceptance of Terms
By accessing and using the Geeta Science Inter College website, you accept and agree to be bound by the terms and provision of this agreement.

2. Use of Website
You agree to use the website only for lawful educational and informational purposes.

3. Admissions & Fees
Submission of an online application does not guarantee admission.`}
            </div>
          </div>
        );

      default:
        return (
          <div className="support-content" style={{maxWidth: '800px'}}>
            <p className="text-muted">
              This page is currently under construction. Please check back later for updates to our {title.toLowerCase()}.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="support-page bg-cream" style={{padding: '160px 0 120px', minHeight: '80vh'}}>
      <div className="container">
        <h1 className="text-navy mb-8" style={{fontSize: '48px', borderBottom: '2px solid var(--color-border)', paddingBottom: '24px', maxWidth: '800px'}}>
          {title}
        </h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default SupportPage;
