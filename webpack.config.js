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
  inject: 'body',
  production: isProduction
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
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
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
          presets: ['react', 'es2015', 'stage-0']
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