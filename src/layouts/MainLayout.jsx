import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <PageWrapper className="main-content">
        {children}
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default MainLayout;
