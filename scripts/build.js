const { loadConfiguration, build, logger } = require('snowpack');
const fsExtra = require('fs-extra')
const esBuild = require('esbuild');

const projectDir = process.cwd();

process.env.NODE_ENV = 'production';

const buildNodeFile = (file, out) => {
  return esBuild.build({
    entryPoints: [file],
    bundle: true,
    outfile: out,
    platform: 'node',
    target: 'node14.16',
    treeShaking: true,
    minify: true,
    external: ['electron']
  })
}

(async () => {
  fsExtra.removeSync(projectDir + '/build');

  const config = await loadConfiguration({ mount: { "src": { url: '/renderer-int' }, } });
  await build({ config });

  logger.warn('! building main...');

  const mainBuild = buildNodeFile('src/main/main.ts', 'build/main.js');
  const preloadBuild = buildNodeFile('src/main/preload.ts', 'build/preload.js');

  await Promise.all([mainBuild, preloadBuild]);

  logger.info('✔ main build.');

  logger.warn('! moving files...');

  fsExtra.copySync(projectDir + '/src/main/node_modules', projectDir + '/build/node_modules');
  fsExtra.copySync(projectDir + '/src/main/package.json', projectDir + '/build/package.json');
  fsExtra.copySync(projectDir + '/src/splash', projectDir + '/build/splash');

  logger.info('✔ files moved.');

  logger.warn('! cleaning up...');

  fsExtra.copySync(projectDir + '/build/renderer-int/renderer/index.html', projectDir + '/build/renderer/index.html');
  fsExtra.removeSync(projectDir + '/build/renderer-int');
  fsExtra.removeSync(projectDir + '/build/_snowpack');

  logger.info('✔ output cleaned.');

  logger.info('▶ Build Complete!');

  process.exit();
})();
