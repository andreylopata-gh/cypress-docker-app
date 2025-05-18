import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },

  e2e: {
    // baseUrl: 'http://test.triapp.swiss/',
    //baseUrl: 'http://localhost:3000/',
    baseUrl: 'https://triapp-dev.vercel.app',
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
