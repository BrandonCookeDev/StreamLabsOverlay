import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const FILENAME = '/total_subscriber_count.txt'

export default class SubCountWatcher extends Component{

	constructor(props) {
		super(props);
		this.interval = parseInt(props.interval);
		this.auto = props.auto != null ? true : false;
		this.state = { subCount: 0 };
  
		this.updateSubCount = this.updateSubCount.bind(this);
		this.getFile = this.getFile.bind(this);

		if(this.auto){
			if(isNaN(this.interval)) throw new Error('SubCountWatcher: checkPeriod cannot be a non-number');
			setInterval(this.updateSubCount, this.interval);
		}
	}

	updateSubCount(){
		let err = (e) => console.error('SubCountWatcher.updateSubCount error: %s', e);

		try{
			this.getFile()
				.then(count => {
					this.setState({
						subCount: count
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
			return axios.get(FILENAME)
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
			<span class="subCountSpan">
				{this.state.subCount}
			</span>
		)
	}
}