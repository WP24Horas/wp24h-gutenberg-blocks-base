const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaultConfig,
  entry: {
    'hello': path.resolve(__dirname, 'blocks/hello/index.js'),
    'card': path.resolve(__dirname, 'blocks/card/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true
  }
};
