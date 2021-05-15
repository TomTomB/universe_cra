const projectDir = process.cwd();
const isProd = process.env.NODE_ENV === 'production';

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/' },
  },
  exclude: ['**/src/main/**/*', '**/*.stories.tsx'],
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
          presets: [
            '@babel/preset-typescript',
            ['@babel/preset-react', { development: !isProd }],
          ],
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
    '@universe/renderer/uikit/core': './src/renderer/domain/uikit/core',
    '@universe/renderer/uikit/common': './src/renderer/domain/uikit/common',
    '@universe/renderer/uikit/form': './src/renderer/domain/uikit/form',
    '@universe/renderer/uikit/webgl': './src/renderer/domain/uikit/webgl',
    '@universe/renderer/uikit/gamedata': './src/renderer/domain/uikit/gamedata',
  },
  routes: [{ match: 'routes', src: '.*', dest: 'renderer/index.html' }],
  devOptions: {
    hmr: true,
  },
};
