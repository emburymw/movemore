import ReactGA from 'react-ga';

// Initialize Google Analytics
export const initializeGA = (trackingId) => {
  if (trackingId) {
    ReactGA.initialize(trackingId);
  }
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.pageview(path);
};

// Track custom events
export const trackEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    value: value
  });
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
