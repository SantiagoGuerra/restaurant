module.exports = {
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
};