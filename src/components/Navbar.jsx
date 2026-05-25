import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo font-sans-display text-brown" style={{fontSize: '22px', display: 'flex', gap: '8px', alignItems: 'center'}}>
          <img src="/logo.png" alt="Geeta Science Inter College Logo" style={{height: '40px', width: 'auto'}} onError={(e) => e.target.style.display='none'} />
          <span className="nav-logo-text-full" style={{ fontWeight: 900, WebkitTextStroke: '0.6px currentColor', letterSpacing: '0.5px' }}>Geeta Science Inter College</span>
        </Link>
        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/academics" className={`nav-link ${isActive('/academics') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
            Academics
          </Link>
          <Link to="/admissions" className={`nav-link ${isActive('/admissions') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
            Admissions
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          {isAdminLoggedIn && (
            <Link to="/admin/dashboard" className="mobile-only-action" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" size="medium" style={{width: '100%', borderColor: 'var(--color-border)', color: 'var(--color-navy)'}}>Admin Panel</Button>
            </Link>
          )}
          <Link to="/admissions" className="mobile-only-action" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="orange" size="medium" style={{backgroundColor: 'var(--color-orange)', color: 'white', border: 'none', width: '100%'}}>Apply Now</Button>
          </Link>
        </div>
        <div className="navbar-actions">
          {isAdminLoggedIn && (
            <Link to="/admin/dashboard" className="desktop-only-action" style={{ textDecoration: 'none', marginRight: '16px' }}>
              <Button variant="outline" size="medium" style={{color: 'var(--color-navy)', borderColor: 'var(--color-border)'}}>Admin Panel</Button>
            </Link>
          )}
          <Link to="/admissions" className="desktop-only-action" style={{ textDecoration: 'none' }}>
            <Button variant="orange" size="medium" style={{backgroundColor: 'var(--color-orange)', color: 'white', border: 'none'}}>Apply Now</Button>
          </Link>
          <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
