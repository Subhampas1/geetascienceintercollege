import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isCollege, setIsCollege] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCollege(prev => !prev);
    }, 3000); // Swap every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo font-sans-display text-brown" style={{fontSize: '22px', display: 'flex', gap: '8px', alignItems: 'center'}}>
          <img src="/logo.png" alt="Geeta Science Inter College Logo" style={{height: '40px', width: 'auto'}} onError={(e) => e.target.style.display='none'} />
          <span className="nav-logo-text-full">Geeta Science Inter</span>
          <span className="nav-logo-text-short" style={{display: 'none'}}>Geeta Science</span>
          <span key={isCollege ? 'college' : 'mahavidyalaya'} className="logo-swap nav-logo-text-full" style={{
            display: 'inline-block',
            minWidth: '150px',
            animation: 'fadeIn 0.5s ease-in-out'
          }}>
            {isCollege ? 'College' : 'Mahavidyalaya'}
          </span>
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
          <Link to="/admissions" className="mobile-only-action" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="orange" size="medium" style={{backgroundColor: 'var(--color-orange)', color: 'white', border: 'none', width: '100%'}}>Apply Now</Button>
          </Link>
        </div>
        <div className="navbar-actions">
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
