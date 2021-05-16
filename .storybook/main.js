const path = require('path');

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.glsl$/,
        loader: 'webpack-glsl-loader',
        include: path.resolve(__dirname, '../'),
      }
    );

    config.module.rules.push(
      {
        test: /\.(webm|ogg)$/i,
        type: 'asset',
        include: path.resolve(__dirname, '../'),
      }
    );

    config.resolve.alias['@universe/shared'] = path.resolve(__dirname, '../src/shared');
    config.resolve.alias['@universe/core'] = path.resolve(__dirname, '../src/core');
    config.resolve.alias['@universe/types'] = path.resolve(__dirname, '../src/types');
    config.resolve.alias['@universe/mocks'] = path.resolve(__dirname, '../src/mocks');
    config.resolve.alias['@universe/renderer/store'] = path.resolve(__dirname, '../src/renderer/store');
    config.resolve.alias['@universe/renderer/style'] = path.resolve(__dirname, '../src/renderer/style');
    config.resolve.alias['@universe/renderer/uikit/core'] = path.resolve(__dirname, '../src/renderer/domain/uikit/core');
    config.resolve.alias['@universe/renderer/uikit/common'] = path.resolve(__dirname, '../src/renderer/domain/uikit/common');
    config.resolve.alias['@universe/renderer/uikit/form'] = path.resolve(__dirname, '../src/renderer/domain/uikit/form');
    config.resolve.alias['@universe/renderer/uikit/webgl'] = path.resolve(__dirname, '../src/renderer/domain/uikit/webgl');
    config.resolve.alias['@universe/renderer/uikit/gamedata'] = path.resolve(__dirname, '../src/renderer/domain/uikit/gamedata');
    config.resolve.alias['@universe/renderer/uikit/lobby'] = path.resolve(__dirname, '../src/renderer/domain/uikit/lobby');
    config.resolve.alias['@universe/renderer/uikit/champion'] = path.resolve(__dirname, '../src/renderer/domain/uikit/champion');
    config.resolve.alias['@universe/renderer/uikit/summoner'] = path.resolve(__dirname, '../src/renderer/domain/uikit/summoner');
    config.resolve.alias['@universe/renderer/uikit/overlay'] = path.resolve(__dirname, '../src/renderer/domain/uikit/overlay');

    return config;
  },
};
