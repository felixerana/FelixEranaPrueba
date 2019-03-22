import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {mapStateToProps, getPhones} from './Redux';
import PhoneListContainer from './components/PhoneListContainer';

class App extends Component {
  componentDidMount(){
    this.props.getPhones();
  }
  render() {
    const {loading, data, error } = this.props;
      if (loading) {
        return <p>Loading</p>;//Ruedita giragira.
      } else if (error !== null) {
        return <p>Error</p>;
      } else {
        return <PhoneListContainer phones = {data} />;
      }
  }
}

export default connect(mapStateToProps, {getPhones}) (App);
