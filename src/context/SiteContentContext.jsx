import React, { createContext, useState, useEffect } from 'react';

const currentYear = new Date().getFullYear().toString();

// Default Hardcoded Content
const defaultContent = {
  home: {
    heroTitleHighlight: "Journey",
    heroTitleRest: "of Discovery",
    heroSubtitle: "Empowering minds through playful discovery and academic excellence since 2015. We don't just teach, we inspire.",
    principalName: "Sanjay Kumar",
    principalQuote: "Education is not just about textbooks; it's about shaping character and inspiring a lifelong love for learning. At Geeta Science, we nurture both."
  },
  academics: {
    heroTitleHighlight: "Brilliant",
    heroTitleRest: "Future",
    heroSubtitle: "At Geeta Science Inter College, we transform traditional learning into an exciting adventure. Explore our diverse academic streams designed to nurture every unique mind.",
    scienceDesc: "Unlock the fundamental laws of the universe. From quantum mechanics to advanced biotechnology, our cutting-edge laboratories and expert faculty will transform your raw curiosity into brilliant scientific discoveries.",
    commerceDesc: "Master the dynamic world of global finance and economics. Through real-world case studies and strategic analysis, we forge the next generation of industry leaders and visionary entrepreneurs.",
    artsDesc: "Explore the profound depths of human society and culture. Unleash your creative and analytical potential through immersive studies in literature, history, and behavioral sciences."
  },
  contact: {
    address: "Katghara, Silwar Range, Kesura More, Sarauni Road, Hazaribag, Jharkhand",
    phone1: "+91 98765 43210",
    phone2: "+91 98765 43211",
    email1: "info@geetascience.edu",
    email2: "admissions@geetascience.edu"
  },
  support: {
    privacyPolicy: "Privacy Policy Content Here",
    termsOfService: "Terms of Service Content Here",
    careerGuidance: "Career Guidance Content Here"
  },
  toppers: [
    {
      id: 1,
      batch: currentYear,
      rank: "01",
      name: "Aarav Sharma",
      stream: "Science Stream - PCMB",
      quote: "\"The continuous support from teachers during late-hour doubt sessions made all the difference in my preparation.\"",
      aggregate: "99.2%",
      subject: "Maths: 100",
      image: "https://ui-avatars.com/api/?name=Aarav+Sharma&background=2bb585&color=fff&size=150",
      color: "green"
    },
    {
      id: 2,
      batch: currentYear,
      rank: "02",
      name: "Priya Patel",
      stream: "Commerce Stream",
      quote: "\"The conceptual clarity I gained here helped me crack the toughest accountancy problems with ease.\"",
      aggregate: "98.8%",
      subject: "Accounts: 100",
      image: "https://ui-avatars.com/api/?name=Priya+Patel&background=f08b3a&color=fff&size=150",
      color: "orange"
    },
    {
      id: 3,
      batch: currentYear,
      rank: "03",
      name: "Neha Singh",
      stream: "Arts & Humanities",
      quote: "\"The interactive learning environment allowed me to explore my subjects deeply and critically.\"",
      aggregate: "98.4%",
      subject: "History: 99",
      image: "https://ui-avatars.com/api/?name=Neha+Singh&background=f6c344&color=fff&size=150",
      color: "yellow"
    }
  ]
};

export const SiteContentContext = createContext();

export const SiteContentProvider = ({ children }) => {
  const [content, setContent] = useState(() => {
    const savedContent = localStorage.getItem('geeta_site_content');
    if (savedContent) {
      const parsed = JSON.parse(savedContent);
      if (!parsed.toppers) {
        parsed.toppers = defaultContent.toppers;
      }
      return parsed;
    }
    return defaultContent;
  });

  useEffect(() => {
    localStorage.setItem('geeta_site_content', JSON.stringify(content));
  }, [content]);

  const updateContent = (section, newSectionData) => {
    setContent(prev => ({
      ...prev,
      [section]: Array.isArray(prev[section]) ? newSectionData : {
        ...prev[section],
        ...newSectionData
      }
    }));
  };

  return (
    <SiteContentContext.Provider value={{ content, updateContent }}>
      {children}
    </SiteContentContext.Provider>
  );
};
