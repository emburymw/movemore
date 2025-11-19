import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-8BCZQ5QYB0';

let isInitialized = false;

export const initializeGA = (trackingId = GA_TRACKING_ID) => {
  if (trackingId && !isInitialized) {
    ReactGA.initialize(trackingId, {
      debug_mode: process.env.NODE_ENV === 'development'
    });
    isInitialized = true;
    console.log('Google Analytics 4 initialized with ID:', trackingId);
  }
};

// Track page views (GA4 format)
export const trackPageView = (path) => {
  if (!isInitialized) {
    console.warn('GA not initialized, skipping page view');
    return;
  }
  ReactGA.send({ hitType: 'pageview', page: path });
  console.log('GA4 Page View tracked:', path);
};

// Track custom events (GA4 format)
export const trackEvent = (eventName, eventParams = {}) => {
  ReactGA.event(eventName, eventParams);
  console.log('GA4 Event tracked:', eventName, eventParams);
};

// Track button clicks
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || 'Unknown'
  });
};

// Track Book Now button clicks (conversion tracking)
export const trackBookNowClick = (location = '') => {
  trackEvent('book_now_click', {
    location: location || 'Unknown Location'
  });
  console.log('GA4 Book Now click tracked from:', location);
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', {
    form_name: formName
  });
};

// Track contact form submissions
export const trackContactForm = () => {
  trackEvent('contact_form_submit', {
    form_type: 'Contact Form'
  });
};

// Track service inquiries
export const trackServiceInquiry = (serviceName) => {
  trackEvent('service_inquiry', {
    service_name: serviceName
  });
};

// Track language changes
export const trackLanguageChange = (language) => {
  trackEvent('language_change', {
    language: language
  });
};

// Track scroll depth (can be called from components)
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    depth: `${depth}%`
  });
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds) => {
  trackEvent('time_on_page', {
    time_seconds: timeInSeconds
  });
};
