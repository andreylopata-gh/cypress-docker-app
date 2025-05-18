import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },

  e2e: {
    baseUrl: '', // put the url
    video: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 10000, //30000,
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
     // require('cypress-localstorage-commands/plugin')(on, config);

      return config;
    },
  },
});
