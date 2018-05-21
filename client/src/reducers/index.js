import {combineReducers} from 'redux';
import {reducer} from 'redux-form';  //the form key is essential its powered by this lib
import authreducer from './authreducer'

export default combineReducers ({
  auth : authreducer,
  form : reducer
});
