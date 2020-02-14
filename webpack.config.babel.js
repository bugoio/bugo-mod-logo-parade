// ./webpack.config.babel.js
const path = require('path');

module.exports = {
  entry: {
    "logo-parade": ["./src/es6/logo-parade.js"],
    // js bundle for other posts, e.g.
    // secondpost: ["./app/second-post.js"]
  },
  output: {
    path: path.resolve(__dirname, "assets", "js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  watch: true
};