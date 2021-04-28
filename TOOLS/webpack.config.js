const path = require("path");

module.exports = {
  entry: "./tlist.js",
  output: {
    filename: "tlist.js",
    path: path.resolve(__dirname, "dist"),
    library: "TLISTJS",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "production",
  devtool: "source-map"
};

