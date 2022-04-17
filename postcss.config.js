/* eslint-disable import/no-extraneous-dependencies */
const postcssNormalize = require('postcss-normalize');
const postcssAutoprefixer = require('autoprefixer');

module.exports = {
  plugins: [postcssNormalize(), postcssAutoprefixer],
};
