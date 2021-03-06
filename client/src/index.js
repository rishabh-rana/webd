import React from "react";
import ReactDOM from "react-dom";
import App from "./Ap";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import reducers from "./reducers/index";
import reduxThunk from 'redux-thunk'
import axios from 'axios';
window.axios = axios;

const store = new createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
