import React, { useEffect } from 'react';
import { analytics, trackEvent, identifyUser, setScreen } from './firebase';
import { useLocation } from 'react-router-dom';

// Helper to get device/browser info
function getDeviceInfo() {
  return {
    user_agent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screen_width: window.screen.width,
    screen_height: window.screen.height,
    device_memory: navigator.deviceMemory || null,
    hardware_concurrency: navigator.hardwareConcurrency || null,
  };
}

// Helper to get UTM params from URL
function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_term: params.get('utm_term'),
    utm_content: params.get('utm_content'),
  };
}

/**
 * <Analysis />
 * - Sets up global user properties once
 * - Logs a `page_view` on every route change with extra info
 * - Exposes `trackEvent` for child components
 */
const Analysis = ({ userProperties = {}, children }) => {
  const location = useLocation();

  // 1️⃣ Identify user (once) when component first mounts
  useEffect(() => {
    const deviceInfo = getDeviceInfo();
    const utmParams = getUTMParams();
    const referrer = document.referrer;

    // Set user properties (device, UTM, referrer)
    identifyUser({
      ...userProperties,
      ...deviceInfo,
      ...utmParams,
      referrer,
    });
  }, []);

  // 2️⃣ Log page_view whenever URL changes, with more info
  useEffect(() => {
    setScreen(location.pathname); // For Firebase SPA navigation

    trackEvent('page_view', {
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title,
      ...getDeviceInfo(),
      ...getUTMParams(),
      referrer: document.referrer,
      timestamp: Date.now(),
    });
  }, [location]);

  return <>{children}</>;
};

export default Analysis;