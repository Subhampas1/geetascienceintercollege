import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    const timeoutId = setTimeout(() => {
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
