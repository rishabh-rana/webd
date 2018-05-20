import React, { Component } from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Header from './Components/header';
import Landing from './Components/landing';
import {connect} from 'react-redux';
import * as actions from './actions/index'


const dashboard = () => <h2>dash</h2>;
const newsurvey = () => <h2>newsurvey</h2>;


class App extends Component {

componentDidMount(){
  this.props.fetchUser();
}


  render() {
    return (
      <div>
      <BrowserRouter>
      <div>
        <Header />
        <Route path='/' exact component={Landing} />
        <Route path='/newsurvey' component={newsurvey} />
        <Route path='/surveys' component={dashboard} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null,actions)(App);
