let path = require('path')
let webpack = require('webpack')


module.exports = {
 entry: {
  r: './src/index.js'
 },
 output: {
  path: path.join(__dirname, 'dist'),
  filename: '[name].js'
 },
 module: {
  loaders: [
   {
    test: /\.js[x]?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,    
    query: {
//     cacheDirectory: true,
     presets: ['react', 'env'],
     plugins: ['babel-plugin-transform-object-rest-spread']
    }
   }
  ]
 },
 watch:false
}
