const projectDir = process.cwd();
const isProd = process.env.NODE_ENV === 'production';


/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/' },
  },
  exclude: ['**/src/main/**/*'],
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
    [
      '@snowpack/plugin-babel',
      {
        input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
        transformOptions: {
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                minify: isProd,
                transpileTemplateLiterals: isProd,
                displayName: !isProd,
                fileName: !isProd,
              },
            ],
          ],
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
  routes: [{ match: 'routes', src: '.*', dest: 'renderer/index.html' }],
  devOptions: {
    hmr: true,
  },
};
