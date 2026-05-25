import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-cream border-t">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo font-sans-display text-brown" style={{ fontSize: '24px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img src="/logo.png" alt="Geeta Science Inter College Logo" style={{ height: '60px', width: 'auto' }} onError={(e) => e.target.style.display = 'none'} />
            <span style={{ lineHeight: 1.2, fontWeight: 900, WebkitTextStroke: '1px currentColor', letterSpacing: '-0.5px' }}>Geeta Science<br />Inter College</span>
          </Link>
          <p className="footer-subtitle">
            Empowering minds through playful discovery and academic excellence since 2015.
          </p>
        </div>

        <div className="footer-column">
          <h4>Academics</h4>
          <Link to="/academics">Programs & Streams</Link>
          <Link to="/academics">JEE & NEET Support</Link>
          <Link to="/admissions">Admissions</Link>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <Link to="/calendar">Academic Calendar</Link>
          <Link to="/portal">Student Portal</Link>
          <Link to="/toppers">Toppers Gallery</Link>
          <Link to="/notices">Notice Board</Link>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <Link to="/guidance">Career Guidance</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/admin" className="text-orange" style={{ marginTop: '16px', fontWeight: 600 }}>Admin Login</Link>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} Geeta Science Inter College. Built with excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
