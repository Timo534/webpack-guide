const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.dev ? 'development' : 'production',
    entry: './src/index.js',
    devtool: env.dev ? 'inline-source-map' : false,
    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '缓存',
      }),
    ],
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/',
    },
    optimization: {
      moduleIds: 'natural',
      minimize: !env.closeMin,
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };
}
