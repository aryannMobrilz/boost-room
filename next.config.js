const withLess = require('@zeit/next-less');

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  experimental: {
    modern: true,
    reactStrictMode: true
  },
  productionBrowserSourceMaps: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    });
    return config;
  }
});
