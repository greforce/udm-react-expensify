const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
  ],
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader',
      ],
    }],
  },
  devtool: 'source-map',
});