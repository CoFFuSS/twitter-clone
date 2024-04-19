module.exports = {
  fixturesFolder: 'cypress/fixtures',
  env: { FOO: 'dev' },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
};
