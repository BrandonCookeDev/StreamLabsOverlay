'use strict';
import Comparator from './Comparator.js';
import axios from 'axios';

class Converted{
	constructor(original, converted){
		this.original = original;
		this.converted = converted;
	}
}

export default class BitCheerComparator extends Comparator{
	constructor(props){
		super(props);
		this.cheerFile = props.cheerFile;
		this.donationFile = props.donationFile;
		this.state = {value: 0};

		this.compare = this.compare.bind(this);
		super.updateValue();
	}

	/**
	 * @override
	 */
	getFiles(){
		let err = e => console.log('BitCheerComparator.getFiles error: %s', e.message);

		return Promise.all([
			axios.get(this.props.cheerFile),
			axios.get(this.props.donationFile)
		])
		.then(this.compare)
		.catch(err);
	}

	compare(arr){
		let err = e => console.log('BitCheerComparator.compare error: %s', e.message);

		let c = new Converted(
			arr[0].data, this.convertCheer(arr[0])
		)

		let d = new Converted(
			arr[1].data, this.convertDonation(arr[1])
		)

		let max = super.getMax([c.converted, d.converted]);
		return max == c.converted ? c.original : d.original;
	}

	convertDonation(dono){
		dono = dono.data ? dono.data : dono;
		if(isNaN(dono)){
			dono = new RegExp(/[0-9]+/).exec(dono)[0];
		}
		return parseFloat(dono);
	}

	convertCheer(cheer){
		cheer = cheer.data ? cheer.data : cheer;
		if(isNaN(cheer)){
			// Extract cheer amount from string 'cheer: xxxxx'
			cheer = new RegExp(/[0-9]+/).exec(cheer)[0];
		}
		return parseFloat(cheer) / 1000;
	}
} 