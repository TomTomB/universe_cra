const { gitDescribeSync } = require('git-describe');
const { writeFileSync, mkdirSync, existsSync } = require('fs');
const path = require('path');

const gitInfo = gitDescribeSync();
const versionInfoJson = JSON.stringify(gitInfo, null, 2);

if (!existsSync(path.join(__dirname, '../build'))) {
  mkdirSync(path.join(__dirname, '../build'));
}

writeFileSync(path.join(__dirname, '../build/version.json'), versionInfoJson);
