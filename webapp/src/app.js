import React from 'react';
import ReactDOM from 'react-dom';

// main app
import SubCountWatcher from './components/SubCountWatcher';

ReactDOM.render(<SubCountWatcher auto interval="3000" />, document.getElementById('subCount'));