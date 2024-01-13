const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  // Don't use developement during development because it will not picked up by extenssion due to eval() used in dev mode.
  mode: "production",
  target: "web",
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    hot: true,
    liveReload: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
