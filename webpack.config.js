var HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackConfig = new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    });

module.exports = {
  entry: [
    __dirname + '/app/Index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    HtmlWebpackConfig
  ]
};