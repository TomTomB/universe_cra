import { contextBridge } from 'electron';
import { init } from '@sentry/electron/dist/renderer';
import { sentryURL } from '../shared/constants';
import packageJSON from '../../package.json';
import type { UniverseAPI } from '../types/definitions/window';

init({
  dsn: sentryURL,
  enabled: !process.env.NODE_ENV,
  release: `v${packageJSON.version}`,
});

const universeAPI: UniverseAPI = {
  doAThing: () => {
    return null;
  },
  isProd: !process.env.NODE_ENV,
  isDev: process.env.NODE_ENV === 'development',
  isTest: process.env.NODE_ENV === 'test',
  isStorybook: process.env.NODE_ENV === 'storybook',
};

contextBridge.exposeInMainWorld('universe', universeAPI);
