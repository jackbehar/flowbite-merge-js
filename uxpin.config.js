module.exports = {
  components: {
    categories: [
      {
        name: 'INPUTS',
        include: [
          'src/components/Button/Button.jsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.jsx',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'MUI-UXPin-Merge',
};
