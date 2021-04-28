import type { UniverseAPI } from '../types/definitions/window';
import { contextBridge } from 'electron';
import { init } from '@sentry/electron/dist/renderer';
import packageJSON from '../../package.json';
import { sentryURL } from '../shared/constants';

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
};

contextBridge.exposeInMainWorld('universe', universeAPI);
