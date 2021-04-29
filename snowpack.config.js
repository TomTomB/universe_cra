const projectDir = process.cwd();

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "src": { url: '/' },
  },
  exclude: ["**/src/main/**/*"],
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
          config.entry.index = `${projectDir}/build/renderer-int/renderer/index.js`;
          config.output.path = `${projectDir}/build/renderer/`;
          return config;
        },
      },
    ],
  ],
  alias: {
    '@universe/shared': './src/shared',
    '@universe/core': './src/core',
    '@universe/types': './src/types',
    '@universe/mocks': './src/mocks',
    '@universe/renderer/store': './src/renderer/store',
    '@universe/renderer/style': './src/renderer/style',
  },
  routes: [
    { "match": "routes", "src": ".*", "dest": "renderer/index.html" },
  ],
  devOptions: {
    hmr: true,
  }
};
