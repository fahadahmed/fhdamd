const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const appConfig = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }, 
      { test: /\.ts$/, exclude: /node_modules/, loader: 'babel-loader' }, 
      { test: /\.tsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: "./images/[hash].[ext]"
            }
        }
      }
    ]
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx']},  
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3700,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fahad Ahmed Admin App | Web Developer and UX Designer | Melbourne, Australia',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
module.exports = [appConfig];