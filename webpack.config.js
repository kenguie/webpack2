const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [ 'lodash' ];

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    // publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/  // only js files
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'), // anything that was found by it's loader to shove and save it in style.css
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']  // look at both bundles and if any duplicates are found, add them to vendor only. Manifest better informs browser when file has changed for cache
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

module.exports = config;
