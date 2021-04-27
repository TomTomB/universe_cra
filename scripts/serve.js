const { loadConfiguration, startServer, logger } = require('snowpack');
const fsExtra = require('fs-extra')
const esBuild = require('esbuild');
const path = require('path');
const { spawn } = require('child_process');

const projectDir = process.cwd();


const buildNodeFile = (file, out) => {
  return esBuild.build({
    entryPoints: [file],
    bundle: true,
    outfile: out,
    platform: 'node',
    target: 'node14.16',
    external: ['electron', 'chokidar']
  })
}

const startElectron = () => {
  logger.info('starting Electron...');

  const p = spawn(
    path.join(
      projectDir,
      'node_modules',
      '.bin',
      process.platform === 'win32' ? 'electron.cmd' : 'electron'
    ),
    ['build/main.js'],
    { stdio: 'inherit' }
  );

  p.on('exit', () => {
    process.exit(0);
  });
}

(async () => {
  const config = await loadConfiguration();
  await startServer({ config });

  const mainBuild = buildNodeFile('src/main/main.ts', 'build/main.js');
  const preloadBuild = buildNodeFile('src/main/preload.ts', 'build/preload.js');

  await Promise.all([mainBuild, preloadBuild]);
  startElectron();
})();