import React, { Component } from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Header from './Components/header';
import Landing from './Components/landing';
import SurveyNew from './Components/surveys/surveynew';
import Dashboard from './Components/dashboard';
import {connect} from 'react-redux';
import * as actions from './actions/index'






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
        <Route path='/surveys/new' component={SurveyNew} />
        <Route path='/surveys' exact component={Dashboard} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null,actions)(App);
