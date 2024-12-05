const { override, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  }),
);