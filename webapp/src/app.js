import React from 'react';
import ReactDOM from 'react-dom';

// main app
import Watcher from './components/Watcher';

ReactDOM.render(<Watcher auto interval="3000" filepath="/total_subscriber_count.txt" />, document.getElementById('subCount'));
ReactDOM.render(<Watcher auto interval="3000" filepath="/donationtrain_latest_amount.txt" />, document.getElementById('latestDonation'));
ReactDOM.render(<Watcher auto interval="3000" filepath="/donationtrain_latest_donator.txt" />, document.getElementById('latestDonator'));