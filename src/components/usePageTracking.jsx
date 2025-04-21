// usePageTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    logEvent(analytics, 'page_view', {
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);
};

export default usePageTracking;
