import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import ToppersGallery from './pages/ToppersGallery';
import Contact from './pages/Contact';
import SupportPage from './pages/SupportPage';
import Notice from './pages/Notice';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { SiteContentProvider } from './context/SiteContentContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <SiteContentProvider>
        <Router>
          <ScrollToTop />
          <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/*" element={
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/toppers" element={<ToppersGallery />} />
              <Route path="/notices" element={<Notice />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/calendar" element={<SupportPage title="Academic Calendar" />} />
              <Route path="/portal" element={<SupportPage title="Student Portal" />} />
              <Route path="/guidance" element={<SupportPage title="Career Guidance" />} />
              <Route path="/privacy" element={<SupportPage title="Privacy Policy" />} />
              <Route path="/terms" element={<SupportPage title="Terms of Service" />} />
            </Routes>
          </MainLayout>
        } />
        </Routes>
        </Router>
      </SiteContentProvider>
    </HelmetProvider>
  );
}

export default App;
