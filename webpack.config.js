var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    LiveReloadPlugin = require('webpack-livereload-plugin'),
    isProduction = process.env.NODE_ENV === 'production',
    plugins = [],
    LivePlugin,
    HtmlWebpackConfig,
    UglifyPlugin,
    EnvPlugin;

HtmlWebpackConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

UglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  },
  comments: false
});

EnvPlugin = new webpack.DefinePlugin({
  'process.env': { 
     NODE_ENV: JSON.stringify('production') 
   }
});

LivePlugin = new LiveReloadPlugin();

plugins.push(HtmlWebpackConfig);

if (isProduction) {
  plugins.push(UglifyPlugin);
  plugins.push(EnvPlugin);
} else {
  plugins.push(LivePlugin);
}

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
  plugins: plugins
};