import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import common from '../common';


export default class Watcher extends Component{

	constructor(props) {
		super(props);
		this.interval = parseInt(props.interval);
		this.auto = props.auto != null ? true : false;
		this.filepath = props.filepath;
		this.isMoney = props.isMoney;
		this.state = { value: '' };
  
		this.updateValue = this.updateValue.bind(this);
		this.getFile = this.getFile.bind(this);

		this.updateValue();
		if(this.auto){
			if(isNaN(this.interval)) throw new Error('SubCountWatcher: checkPeriod cannot be a non-number');
			setInterval(this.updateValue, this.interval);
		}
	}

	updateValue(){
		let err = (e) => console.error('SubCountWatcher.updateValue error: %s', e);

		try{
			this.getFile()
				.then(data => {
					data = this.isMoney ? moneyRemoveDecimals(data) : data;
					this.setState({
						value: data
					})
				})
				.catch(err)
		} catch(e){
			err(e);
		}
	}

	getFile(){
		let err = (e) => console.error('SubCountWatcher.getFile error: %s', e);

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

	render(){
		return (
			<span>
				{this.state.value}
			</span>
		)
	}
}