import React from 'react';
import ReactDOM from 'react-dom';

// main app
import Watcher from './components/Watcher';
import BitCheerComparator from './components/BitCheerComparator';

const INTERVAL = 1000;
function renderDataNode(filepath, id, options={}){
	let isMoney = options.isMoney != null ? options.isMoney === true : false;
	ReactDOM.render(<Watcher auto interval="3000" filepath={filepath} isMoney={isMoney} />, document.getElementById(id));
}

renderDataNode('/total_subscriber_count.txt', 'subCount');
renderDataNode('/subtrain_latest_sub.txt', 'latestSub');
//renderDataNode('/donationtrain_latest_amount.txt', 'latestDonation', {isMoney: true});
//renderDataNode('/donationtrain_latest_donator.txt', 'latestDonator');
//renderDataNode('/most_recent_cheerer.txt', 'latestCheerer');

ReactDOM.render(<BitCheerComparator cheerFile="/all_time_top_cheerer.txt" donationFile='all_time_top_donator.txt' auto interval="3000" />, document.getElementById('allTimeDonationCheer'));
ReactDOM.render(<BitCheerComparator cheerFile="/most_recent_cheerer.txt" donationFile='most_recent_donator.txt' auto interval="3000" />, document.getElementById('latestDonationCheer'));