const path = require('path');

module.exports = {
  pageExtensions: ['page.jsx'],
  webpack: (config) => {
    const setup = config;
    setup.resolve.alias['@src'] = path.resolve(__dirname, './src');
    return setup;
  },
};
