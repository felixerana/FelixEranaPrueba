import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './Redux';


const body = <Provider store= {store}><App /></Provider>

ReactDOM.render(body, document.getElementById('root'));

