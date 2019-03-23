import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './Redux';
import {BrowserRouter} from 'react-router-dom';


const body = <Provider store= {store}><BrowserRouter><App /></BrowserRouter></Provider>

ReactDOM.render(body, document.getElementById('root'));

