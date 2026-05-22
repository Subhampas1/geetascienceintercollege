import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, keywords }) => {
  const defaultTitle = 'Geeta Science Inter College';
  const defaultDescription = 'Empowering minds through playful discovery and academic excellence since 2015. Offering Science, Commerce, and Arts streams with specialized JEE/NEET support.';
  const defaultKeywords = 'Geeta Science Inter College, intermediate college, best science college, JEE preparation, NEET coaching, Commerce stream, Arts stream';

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={window.location.href} />

      {/* OpenGraph tags */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:site_name" content={defaultTitle} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || 'Geeta Science Inter College'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;
