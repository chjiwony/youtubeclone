const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js", //소스코드드
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "assets", "js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], //마지막으로 적용되는 것을 제일 앞에, 인스톨 먼저
      },
    ],
  },
};
