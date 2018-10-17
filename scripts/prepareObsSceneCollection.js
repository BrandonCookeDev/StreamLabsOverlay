'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const ROOT = path.join(__dirname, '..');
const ROOT_LINUX = ROOT.replace(/\\/g, '/');
const OBS_JSON = path.join(__dirname, '..', 'OBS', 'skeleton.json')
const OBS_JSON_NEW = path.join(__dirname, '..', 'OBS', 'layout.json');

const osvar = process.platform;

try{
	console.log('Operating System: %s', chalk.blue(osvar));
	console.log('pulling content from %s', chalk.blue(OBS_JSON));
	let content = '';
	let readStream = fs.createReadStream(OBS_JSON);
	readStream.on('data', function(data){
		content += data;
	});
	readStream.on('error', function(err){
		console.error(err);
		process.exit(1);
	});
	readStream.on('close', function(){
		console.log(chalk.green('completed content gathering. Overwritting paths...'));

		let oldAbs = new RegExp(/\"\/Users\/brandoncooke\/Documents\/Workspace\/StreamLabsTest\/([\S]*)\"/, 'g');
		
		/*
		let newContent = content.replace(
			oldAbs,
			function(match, capture){
				let newpath;
				console.log('match', chalk.magenta(match), 'capture', chalk.magenta(capture));	
				
				if(osvar === 'win32')
					newpath = ROOT + '\\' + capture.replace(/\//g, '\\');
				else
					newpath = ROOT + '/' + capture;
				

				console.log(chalk.blue(newpath))
				return JSON.stringify(newpath);
			}
		)
		*/

		let newContent = content.replace(
			oldAbs, fwed
			JSON.stringify(ROOT_LINUX + "/$1")	aasdfgasdfgdsaf
		);

		console.log()
		let writeStream = fs.createWriteStream(OBS_JSON_NEW);
		writeStream.on('error', function(e){
			console.error(e);
			process.exit(1);
		})
		writeStream.on('finish', function(){
			console.log(chalk.green('completed new write!'));
			process.exit(0);
		})
		let split = newContent.split(',');
		split.forEach((line, i) => { 
			writeStream.write(line + (i + 1 < split.length ? ',' : ''));
		})

	})
} catch(e){
	console.error(e);
	process.exit(1);
}