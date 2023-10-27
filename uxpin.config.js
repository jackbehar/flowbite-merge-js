module.exports = {
  components: {
    categories: [
      {
        name: 'COMPONENTS',
        include: [
          'src/components/Button/Button.jsx',
          'src/components/Card/Card.jsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.jsx',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'React-Flowbite-UXPin-Merge',
};
