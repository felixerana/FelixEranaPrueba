import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {mapStateToProps, getPhones} from './Redux';
import PhoneListContainer from './components/PhoneListContainer';
import {Route} from 'react-router-dom';
import PhoneDetailComponent from './components/PhoneDetailComponent';
import {Error404} from './components/Error404';

class App extends Component {
  componentDidMount(){
    this.props.getPhones();
  }
  render() {
        return (<>
                  <Route exact path="/" component={PhoneListContainer }/>
                  <Route path="/phonedetail/:id" component={PhoneDetailComponent} />
                  <Route component={Error404} />
                </>
        );
      }
}

export default connect(mapStateToProps, {getPhones}) (App);
