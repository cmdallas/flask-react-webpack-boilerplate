var webpack = require('webpack');
module.exports = {
  entry: [
    './js/app.js'
  ],
  mode: 'development',
  output: {
    path: __dirname + '/static',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$|\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
