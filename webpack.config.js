var webpack = require('webpack');
module.exports = {
  entry: [
    './js/app.js'
  ],
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
};
