const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 清理dist文件插件
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack require('webpack')

module.exports = {
  entry: {
    app: './src/index.js'
  },

  // 代码跟踪， 用于查找发生错误的：原文件
  devtool: 'inline-source-map',
  // 简单的web服务
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
