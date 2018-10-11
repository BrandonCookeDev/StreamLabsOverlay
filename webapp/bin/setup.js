#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const cp = require('child_process');

const LIB_ROOT = path.join(__dirname, '..');
const PROJECT_DIR = path.resolve('.');
const WEBAPP_DIR = path.join(PROJECT_DIR, 'webapp');

if(fs.existsSync(WEBAPP_DIR)){
    console.warn('Webapp dir exists. Emptying and deleting...');
    fs.emptyDirSync(WEBAPP_DIR);
    console.warn('Emptied. Removing now...');
    fs.rmdirSync(WEBAPP_DIR);
    console.log('Emptied and Deleted existing');
}
console.log('Creting webapp dir in project...');
fs.mkdirSync(WEBAPP_DIR);
console.log('done');

console.log('Copying lib into webapp...');
fs.copySync(LIB_ROOT, WEBAPP_DIR);
console.log('done');

console.log('Running NPM install on new webapp directory...');
let cmd = `npm install "${WEBAPP_DIR}" --prefix "${WEBAPP_DIR}"`;
let results = cp.execSync(cmd);
console.log('done. results: ' + results);

console.log('Setup complete!');