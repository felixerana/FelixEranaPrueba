import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {mapStateToProps, getPhones} from './Redux';
import PhoneListContainer from './components/PhoneListContainer';
import Spinner from 'react-bootstrap/Spinner';
import {Route} from 'react-router-dom';
import PhoneDetailComponent from './components/PhoneDetailComponent';

class App extends Component {
  componentDidMount(){
    this.props.getPhones();
  }
  render() {
    const {loading, data, error } = this.props;
      if (loading) {
        return <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>;
      } else if (error !== null) {
        return <p>Error</p>;
      } else {
        return (<>
                  <Route exact path="/" component={PhoneListContainer }/>
                  <Route path="/phonedetail/:id" component={PhoneDetailComponent} />
                </>
        );
      }
  }
}

export default connect(mapStateToProps, {getPhones}) (App);
