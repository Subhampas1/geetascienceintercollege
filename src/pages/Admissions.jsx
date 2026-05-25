import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import Chip from '../components/Chip';
import Card from '../components/Card';
import SEO from '../components/SEO';
import InputField from '../components/InputField';
import './Admissions.css';

const Admissions = () => {
  const location = useLocation();
  const [selectedStream, setSelectedStream] = useState('science');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const streamParam = params.get('stream');
    if (streamParam && ['science', 'commerce', 'arts'].includes(streamParam)) {
      setSelectedStream(streamParam);
      if (location.hash === '#apply-form') {
        setTimeout(() => {
          document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]);

  const handleStreamChange = (e) => setSelectedStream(e.target.value);

  return (
    <div className="admissions-page bg-cream">
      <SEO
        title="Admissions & Application"
        description="Apply for admission to Geeta Science Inter College. Check the admission process, required documents, and apply online for Class 11 and 12."
        keywords="college admissions, intermediate admission, apply online, Class 11 admission"
      />

      {/* Hero Section */}
      <section className="admissions-hero text-center">
        <div className="container">
          <h1 className="hero-title font-sans-display admissions-hero-title">
            Begin your <span className="font-sans-display text-brown">journey</span> here.
          </h1>
          <p className="hero-subtitle text-muted" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
            Join our thriving community of learners. Simple, transparent, and supportive admission process.
          </p>
          <div className="admissions-hero-actions">
            <a href="#apply-form" className="admissions-hero-link">
              <Button variant="brown" size="large" className="admissions-hero-btn">Start Application</Button>
            </a>
            <Link to="/contact" className="admissions-hero-link">
              <Button variant="outline" size="large" className="bg-white text-brown admissions-hero-btn" style={{ border: '2px solid var(--color-brown-primary)' }}>Call Support</Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section className="process-section bg-white">
        <div className="container">
          <h2 className="section-title text-center font-sans-display">A Simple 3-Step Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number bg-brown text-white">1</div>
              <h4 className="font-sans-display">Visit Campus</h4>
              <p>Take a tour of our facilities and experience the environment.</p>
            </div>
            <div className="process-step">
              <div className="step-number bg-brown text-white">2</div>
              <h4 className="font-sans-display">Family Meeting</h4>
              <p>Discuss goals and aspirations with our academic counselors.</p>
            </div>
            <div className="process-step">
              <div className="step-number bg-brown text-white">3</div>
              <h4 className="font-sans-display">Submit Application</h4>
              <p>Complete the forms and join our community.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Documentation Section */}
      <section className="docs-section bg-white text-center">
        <div className="container">
          <h2 className="font-sans-display mb-4">Required Documentation</h2>
          <p className="mb-12">Please ensure you have these documents ready before starting your application.</p>

          <div className="docs-grid">
            <div className="doc-pill">
              <span className="material-symbols-outlined text-green">check_circle</span>
              <span>10th Marksheet (Original + Copy)</span>
            </div>
            <div className="doc-pill">
              <span className="material-symbols-outlined text-green">check_circle</span>
              <span>School Leaving Certificate (SLC)</span>
            </div>
            <div className="doc-pill">
              <span className="material-symbols-outlined text-green">check_circle</span>
              <span>Passport Size Photos (4)</span>
            </div>
            <div className="doc-pill">
              <span className="material-symbols-outlined text-green">check_circle</span>
              <span>Student Aadhar Card Copy</span>
            </div>
            <div className="doc-pill">
              <span className="material-symbols-outlined text-green">check_circle</span>
              <span>Parent/Guardian Aadhar Card Copy</span>
            </div>
            <div className="doc-pill">
              <span className="material-symbols-outlined text-green">check_circle</span>
              <span>Caste Certificate (If applicable)</span>
            </div>
            <div className="doc-pill">
              <span className="material-symbols-outlined text-green">check_circle</span>
              <span>Migration Certificate</span>
            </div>
          </div>
        </div>
      </section>



      {/* Online Application Form Section */}
      <section className="application-form-section bg-cream" id="apply-form">
        <div className="container">
          <div className="form-container">
            <div className="form-header text-center mb-8">
              <h2 className="font-sans-display text-navy" style={{ fontSize: '36px', marginBottom: '16px' }}>Online Application Form</h2>
              <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>Fill out the details below to start your journey with Geeta Science Inter College. Our team will contact you within 24 hours.</p>
            </div>

            <Card className="application-card">
              <form className="application-form" onSubmit={(e) => e.preventDefault()}>
                <h3 className="form-section-title font-sans-display">Student Information</h3>
                <div className="form-row">
                  <InputField label="Student Full Name" placeholder="e.g. Rahul Kumar" required />
                  <InputField label="Date of Birth" type="date" required />
                </div>

                <h3 className="form-section-title font-sans-display mt-6">Parent/Guardian Details</h3>
                <div className="form-row">
                  <InputField label="Parent/Guardian Name" placeholder="e.g. Rajesh Kumar" required />
                  <InputField label="Relation" placeholder="e.g. Father" required />
                </div>
                <div className="form-row">
                  <InputField label="Email Address" type="email" placeholder="email@example.com" required />
                  <InputField label="Phone Number" type="tel" placeholder="+91 98765 43210" required />
                </div>

                <h3 className="form-section-title font-sans-display mt-6">Academic Background</h3>
                <div className="form-row">
                  <InputField label="Previous School Name" placeholder="School Name" required />
                  <InputField label="Percentage/Grade in Last Exam" placeholder="e.g. 85%" required />
                </div>

                <div className="stream-selection mt-4">
                  <label className="block font-bold mb-4 text-navy" style={{ fontSize: '14px' }}>Desired Stream</label>
                  <div className="stream-radio-group">
                    <label className="stream-radio">
                      <input type="radio" name="stream" value="science" checked={selectedStream === 'science'} onChange={handleStreamChange} />
                      <span className="radio-pill">Science (PCM/PCB)</span>
                    </label>
                    <label className="stream-radio">
                      <input type="radio" name="stream" value="commerce" checked={selectedStream === 'commerce'} onChange={handleStreamChange} />
                      <span className="radio-pill">Commerce</span>
                    </label>
                    <label className="stream-radio">
                      <input type="radio" name="stream" value="arts" checked={selectedStream === 'arts'} onChange={handleStreamChange} />
                      <span className="radio-pill">Arts & Humanities</span>
                    </label>
                  </div>
                </div>

                <div className="form-submit text-center mt-8 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <Button variant="orange" size="large" style={{ width: '100%', maxWidth: '400px', borderRadius: 'var(--radius-full)' }}>Submit Application</Button>
                  <p className="text-muted mt-4" style={{ fontSize: '12px' }}>By submitting, you agree to our terms and admission policies.</p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Need Assistance Section */}
      <section className="assistance-section bg-cream text-center">
        <div className="container">
          <h2 className="font-sans-display mb-4">Need Assistance?</h2>
          <p className="mb-6" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>Our admission counselors are here to help you navigate through the process and answer any questions you might have.</p>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button variant="outline" size="large" className="text-brown" style={{ borderColor: 'var(--color-brown-primary)' }}>Contact Admissions Office</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
