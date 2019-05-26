import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainApp />, document.getElementById('MainApp'));
registerServiceWorker();
