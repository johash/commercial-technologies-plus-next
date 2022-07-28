export const pageview = (url) => {
  if (window && window.gtag) {
    window.gtag("config", "G-57XM0QESDM", {
      page_path: url,
    });
  }
};

export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
