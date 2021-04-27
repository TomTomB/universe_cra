const webpack = require('webpack');

const projectDir = process.cwd();


/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "src/renderer": { url: '/' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {
          config.entry.index = `${projectDir}/build/renderer-int/index.js`;
          config.output.path = `${projectDir}/build/renderer/`;
          return config;
        },
      },
    ],
  ],
  alias: {
    '@universe/shared': 'src/shared',
    '@universe/types': 'src/types',
    '@universe/mocks': 'src/mocks',
  },
  routes: [
    { "match": "routes", "src": ".*", "dest": "index.html" },
  ],
  devOptions: {
    hmr: true
  }
};
