import React, { createContext, useState, useEffect } from 'react';

const currentYear = new Date().getFullYear().toString();

// Default Hardcoded Content
const defaultContent = {
  home: {
    heroTitleHighlight: "Journey",
    heroTitleRest: "of Discovery",
    heroSubtitle: "Empowering minds through playful discovery and academic excellence since 2015. We don't just teach, we inspire.",
    principalName: "Sanjay Kumar",
    principalQuote: "Education is not just about textbooks; it's about shaping character and inspiring a lifelong love for learning. At Geeta Science, we nurture both.",
    hindiQuote: "हम अच्छे कर्मों का अनुसरण करें"
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
    address: "Jabra Rd, Jabra, Hazaribagh, Jharkhand 825301",
    phone1: "9905484481",
    phone2: "9835486174",
    chairmanPhone: "8210363904",
    officePhone: "06546459726",
    email1: "info@geetascience.edu",
    email2: "admissions@geetascience.edu"
  },
  support: {
    privacyPolicy: "Privacy Policy Content Here",
    termsOfService: "Terms of Service Content Here",
    careerGuidance: "Career Guidance Content Here"
  },
  notices: [
    { id: 1, date: 'May 20, 2024', category: 'Admission', type: 'NEW', title: 'Class 11th Admission Open for Session 2024-25', desc: 'Admissions are now open for all streams. Please apply online or visit the campus.', variant: 'new' },
    { id: 2, date: 'May 10, 2024', category: 'General', type: 'UPDATE', title: 'Summer Vacation starts from 15th May 2024', desc: 'The school will remain closed for summer break and reopen on 1st July 2024.', variant: 'update' },
    { id: 3, date: 'April 25, 2024', category: 'Event', type: 'EVENT', title: 'Annual Science Exhibition on 25th June', desc: 'All students are encouraged to participate. Register your projects with your class teacher.', variant: 'event' },
    { id: 4, date: 'April 10, 2024', category: 'Admission', type: 'UPDATE', title: 'Scholarship Test Results Announced', desc: 'The results for the entrance scholarship test are now live on the portal.', variant: 'update' },
    { id: 5, date: 'March 15, 2024', category: 'Event', type: 'NEW', title: 'Guest Lecture by Dr. Verma', desc: 'Join us for an inspiring session on modern physics in the main auditorium.', variant: 'new' },
    { id: 6, date: 'March 01, 2024', category: 'General', type: 'EVENT', title: 'Parent-Teacher Meeting', desc: 'The quarterly PTM is scheduled for all classes to discuss academic progress.', variant: 'event' },
    { id: 7, date: 'May 22, 2024', category: 'General', type: 'NEW', title: 'Campus Wi-Fi Upgrade', desc: 'The campus internet has been upgraded to gigabit speeds for all students.', variant: 'new' }
  ],
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
      // Data Migration Fallbacks
      if (!parsed.toppers) parsed.toppers = defaultContent.toppers;
      if (!parsed.notices) parsed.notices = defaultContent.notices;
      if (!parsed.home.hindiQuote) parsed.home.hindiQuote = defaultContent.home.hindiQuote;
      if (!parsed.contact.chairmanPhone) parsed.contact.chairmanPhone = defaultContent.contact.chairmanPhone;
      if (!parsed.contact.officePhone) parsed.contact.officePhone = defaultContent.contact.officePhone;
      
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
