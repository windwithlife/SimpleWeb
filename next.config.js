const withAntdLess = require('next-plugin-antd-less');

const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = withAntdLess({
  // optional
  modifyVars: { '@primary-color': '#f74a49' },
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {

    config.module.rules.push({
      resolve: {
          alias: {
              '@assets': resolve('./assets'),
              '@components': resolve('./components'),
              '@utils': resolve('./utils')
          }
      },
  });

    return config;
  },

  future: {
    // if you use webpack5
    webpack5: true,
  },
});