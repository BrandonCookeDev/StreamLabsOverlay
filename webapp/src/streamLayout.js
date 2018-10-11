import React from 'react';
import ReactDOM from 'react-dom';

// main app
import Watcher from './components/Watcher';

const INTERVAL = 1000;
function renderDataNode(filepath, id, options={}){
	let isMoney = options.isMoney != null ? options.isMoney === true : false;
	ReactDOM.render(<Watcher auto interval="3000" filepath={filepath} isMoney={isMoney} />, document.getElementById(id));
}

renderDataNode('/total_subscriber_count.txt', 'subCount');
renderDataNode('/donationtrain_latest_amount.txt', 'latestDonation', {isMoney: true});
renderDataNode('/donationtrain_latest_donator.txt', 'latestDonator');
renderDataNode('/subtrain_latest_sub.txt', 'latestSub');
renderDataNode('/most_recent_cheerer.txt', 'latestCheerer');