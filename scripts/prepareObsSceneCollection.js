'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OBS_JSON = path.join(__dirname, '..', 'OBS', '')

let content = '';
let readStream = fs.createReadStream(OBS_JSON);
readStream.on('data', function(data){
	content += data;
});
readStream.on('error', function(err){
	console.error(err);
	process.exit(1);
});
readStream.on('finish', function(){
	let oldAbs = new RegExp(/\/Users\/brandoncooke\/Documents\/Workspace\/StreamLabsTest\//, 'g');
	let newContent = content.replace(oldAbs, ROOT);
	let writeStream = fs.writeFileStream(OBS_JSON);
	newContent.split(',').forEach(line => { 
		writeStream.write(line);
	})
})