import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-8BCZQ5QYB0';

export const initializeGA = (trackingId = GA_TRACKING_ID) => {
  if (trackingId) {
    ReactGA.initialize(trackingId);
    console.log('Google Analytics 4 initialized with ID:', trackingId);
  }
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
  console.log('GA4 Page View tracked:', path);
};

// Track custom events
export const trackEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    action: action,
    category: category,
    label: label,
    value: value
  });
  console.log('GA4 Event tracked:', { category, action, label, value });
};

// Track button clicks
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('Button', 'Click', `${buttonName}${location ? ` - ${location}` : ''}`);
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('Form', 'Submit', formName);
};

// Track contact form submissions
export const trackContactForm = () => {
  trackEvent('Contact', 'Form Submit', 'Contact Form');
};

// Track service inquiries
export const trackServiceInquiry = (serviceName) => {
  trackEvent('Service', 'Inquiry', serviceName);
};

// Track language changes
export const trackLanguageChange = (language) => {
  trackEvent('Language', 'Change', language);
};

// Track scroll depth (can be called from components)
export const trackScrollDepth = (depth) => {
  trackEvent('Engagement', 'Scroll', `${depth}%`);
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds) => {
  trackEvent('Engagement', 'Time on Page', `${timeInSeconds}s`);
};
