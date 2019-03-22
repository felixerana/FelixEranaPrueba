import {combineReducers, createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from "redux-thunk";
 
const DATA_REQUEST = 'data/REQUEST';
const DATA_SUCCESS = 'data/SUCCESS';
const DATA_FAILURE = 'data/FAILURE';
 
const initialState = {
    data: [],
    loading: false,
    error: null
}
 
export const getPhones = () => dispatch => {
    dispatch({ type: DATA_REQUEST });
    return axios.get('http://localhost:8080/phones')
        .then(res => dispatch({ type: DATA_SUCCESS, payload: res.data }))
        .catch(error => dispatch({ type: DATA_FAILURE, payload: error }));
  };
 
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_REQUEST: return {loading: true, error: null, data: []};
      case DATA_FAILURE: return {loading: false, error: action.payload, data: []};
      case DATA_SUCCESS: return {loading: false, error: null, data: action.payload};
      default: return state;
    }
};
 
const reducers = combineReducers({
    dataReducer
});
 
function configureStore() {
    const store = createStore(reducers, applyMiddleware(thunk));
    return store;
};
 
export const store = configureStore();
 
export const mapStateToProps=(state)=>{
    const {loading, data, error } = state.dataReducer;
    return {loading: loading, data: data, error: error};
};