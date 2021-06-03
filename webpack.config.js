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
        title: '代码分离-动态导入',
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
    },
  };
}
