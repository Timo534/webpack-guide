const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.dev ? 'development' : 'production',
    entry: {
      index: './src/index.js',
    },
    devtool: env.dev ? 'inline-source-map' : false,
    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '代码分离-动态导入',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './static'),
            to: 'static'
          }
        ]
      })
    ],
    externals: {
      Vue: 'Vue',
    },
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
