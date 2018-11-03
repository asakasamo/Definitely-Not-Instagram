var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   devtool: "source-map",
   entry: ["./client/reduxstagram"],
   output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: ""
   },
   plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
         "process.env": {
            NODE_ENV: "'production'"
         }
      }),
      new webpack.optimize.UglifyJsPlugin({
         compressor: {
            warnings: false
         }
      }),
      new HtmlWebpackPlugin({
         title: "Definitely Not Instagram",
         template: "_index.html"
      })
   ],
   module: {
      loaders: [
         // js
         {
            test: /\.js$/,
            loaders: ["babel"],
            include: path.join(__dirname, "client")
         },
         // CSS
         {
            test: /\.styl$/,
            include: path.join(__dirname, "client"),
            loader: "style-loader!css-loader!stylus-loader"
         },
         // images
         {
            test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
            loader: "file-loader?name=[name].[ext]" // <-- retain original file name
         }
      ]
   }
};
