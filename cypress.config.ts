module.exports = {
  fixturesFolder: 'cypress/fixtures',
  env: { FOO: 'dev' },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents() {},
  },
};
