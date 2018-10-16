import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import common from '../common';

export default class Rotator extends Component{
	constructor(props){
		super(props);
		this.interval = parseInt(props.interval);
		this.auto = props.auto != null ? true : false;
		this.filepath = props.filepath;
		this.filepaths = props.filepaths;
		this.isMoney = props.isMoney;
		this.state = { mode: 0, modes: [] };
  
  		this.getFile = this.getFile.bind(this);
		this.getFiles = this.getFiles.bind(this);
		this.rotate = this.rotate.bind(this);
		this.resolveModes = this.resolveModes.bind(this);

		this.rotate();
		if(this.auto){
			if(isNaN(this.interval)) throw new Error('SubCountWatcher: checkPeriod cannot be a non-number');
			setInterval(this.rotate, this.interval);
		}
	}

	rotate(){
		let err = e => console.error('Rotator.rotate error: %s', e);

		this.getFiles()
			.then(this.resolveModes)
			.then(() => {
				let newMode = this.state.mode + 1 == this.state.modes.length ? 0 : this.state.mode + 1;
				this.setState({
					mode: newMode
				});
			})
			.catch(err);
	}

	resolveModes(arr){
		let err = e => console.error('Rotator.resolveModes error: %s', e);

		if(!common.jsonEqual(arr, this.state.modes)) {
			let newModes = [];
			arr.forEach((element, index) => {
				newModes[i] = element;
			})
			this.setState({
				modes: newModes
			});
		}
		return this.state.modes;

	}

	getFile(){
		let err = (e) => console.error('Rotator.getFile error: %s', e);

		try{
			return axios.get(this.filepath)
				.then(resp => {
					return resp.data;
				})
				.catch(err);
		} catch(e){
			err(e);
		}
	}

	getFiles(){
		let err = (e) => console.error('Rotator.getFiles error: %s', e);

		try{
			return Promise.all(this.filepaths.split(',').map(f => { return axios.get(f); }))
		} catch(e){
			err(e);
		}
	}

	render(){
		return (
			<span>
				{this.state.modes[this.state.mode]}
			</span>
		)
	}
}