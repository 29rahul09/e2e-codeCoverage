// const codeCoverageTask = require('@cypress/code-coverage/task');
const webpack = require('@cypress/webpack-preprocessor');
const path = require('path');

module.exports = (on, config) => {
  const options = {
    webpackOptions: require(path.resolve(__dirname, '../../webpack.config.js')),
  };
  
  on('file:preprocessor', webpack(options));
  require('@cypress/code-coverage/task')(on, config);
  
  return config;
};
