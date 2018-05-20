import React, { Component } from "react";
import Stripe from "react-stripe-checkout";
import * as actions from '../actions/index';
import {connect} from 'react-redux';

class payments extends Component {
  render() {
    return <Stripe
    name="SurveyDrop"
    description="Pay $5 for 5 SurveyDrop Credits"
    amount = {500}
    token = {token => this.props.handleToken(token)}
    stripeKey = {process.env.REACT_APP_STRIPE}
    >
    <li className="nav-item">
      <span className="nav-link mapspantoa">
        Add Credits
      </span>
    </li>
    </Stripe>;
  }
}

export default connect(null,actions)(payments);
