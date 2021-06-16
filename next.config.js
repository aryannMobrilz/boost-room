const withImages = require('next-images');
const withLess = require('@zeit/next-less');

module.exports = withLess(
  withImages({
    lessLoaderOptions: {
      javascriptEnabled: true
    },
    experimental: {
      modern: true,
      reactStrictMode: true
    },
    target: 'serverless',
    publicRuntimeConfig: {
      backendApiHost: process.env.BACKEND_API_HOST,
      facebook: {
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET
      }
    },
    productionBrowserSourceMaps: true,
    webpack: (config, options) => {
      if (!options.dev) {
        // eslint-disable-next-line no-param-reassign
        config.devtool = 'hidden-source-map';
      }
      return config;
    }
  })
);
