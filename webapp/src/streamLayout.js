import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// main app
import Watcher from './components/Watcher';
import BitCheerComparator from './components/BitCheerComparator';

let isServer = false;
let prefix = isServer ? '/' : '../StreamLabs/'

const INTERVAL = 1000;
function renderDataNode(filepath, id, options={}){
	let isMoney = options.isMoney != null ? options.isMoney === true : false;
	ReactDOM.render(<Watcher auto interval="3000" filepath={filepath} isMoney={isMoney} />, document.getElementById(id));
}

renderDataNode(prefix + 'total_subscriber_count.txt', 'subCount');
renderDataNode(prefix + 'most_recent_subscriber.txt', 'latestSub');

ReactDOM.render(<BitCheerComparator cheerFile={prefix + "all_time_top_cheerer.txt"} donationFile={prefix + 'all_time_top_donator.txt'} auto interval="3000" />, document.getElementById('allTimeDonationCheer'));
ReactDOM.render(<BitCheerComparator cheerFile={prefix + "most_recent_cheerer.txt"} donationFile={prefix + 'most_recent_donator.txt'} auto interval="3000" />, document.getElementById('latestDonationCheer'));

function isServerUp(){
	return axios.get('localhost:8080/16-9.html')
		.then(() => { return true; })
		.catch(e => { return false; });
}