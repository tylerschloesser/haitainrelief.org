const fs = require('fs')
const yaml = require('js-yaml')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const page = yaml.safeLoad(fs.readFileSync('./page.yaml', 'utf8'))
console.log(page)

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.mustache/,
        loader: 'mustache-loader',
        options: { render: page },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.mustache'
    }),
  ],
}
