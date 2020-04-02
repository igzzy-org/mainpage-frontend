const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './web/js/script.js'],
  output: {
    path: path.resolve(__dirname, './web/'),
    filename: 'main.js'
  }
};
