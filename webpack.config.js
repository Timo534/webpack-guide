const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.dev ? 'development' : 'production',
    entry: {
      index: './src/index.js',
      another: './src/another-module.js',
    },
    devtool: env.dev ? 'inline-source-map' : false,
    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '代码分离',
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimize: !env.closeMin,
    },
  };
}
