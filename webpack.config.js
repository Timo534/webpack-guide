const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.dev ? 'development' : 'production',
    entry: {
      one: './src/page1/index.js',
      two: './src/page2/index.js',
      three: './src/page3/index.js',
    },
    devtool: env.dev ? 'inline-source-map' : false,
    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Page One',
        chunks: ['one'],
        filename: "one.html"
      }),
      new HtmlWebpackPlugin({
        title: 'Page Two',
        chunks: ['two'],
        filename: "two.html"
      }),
      new HtmlWebpackPlugin({
        title: 'Page Three',
        chunks: ['three'],
        filename: "three.html"
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/',
    },
    optimization: {
      minimize: !env.closeMin,
      splitChunks: {
        chunks: "all"
      }
    },
  };
}
