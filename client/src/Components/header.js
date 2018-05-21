import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Payments from './payments';

class Header extends Component {
  render() {
    let content = null;

    switch (this.props.auth) {
      case (null):
        content = (<ul className="navbar-nav">
          <li className="nav-item">
            <span className="nav-link " >
              Loading...
            </span>
          </li>
        </ul>);
        break;
      case (false):
        content = (
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/auth/google">
                Login with Google
              </a>
            </li>

          </ul>
        );
        break;
      default:
        content = (
          <ul className="navbar-nav">

              <Payments />


            <li className="nav-item">
              <span className="nav-link mapspantoa" >
                Credits: {this.props.auth.loadingcredits ? ' Loading':this.props.auth.credits}
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/auth/logout">
                Logout
              </a>
            </li>
          </ul>
        );
    }

let displaysurvey = null;
if(this.props.auth){
  displaysurvey = (<li className="nav-item">
    <Link className="nav-link" to="/surveys">
      Surveys
    </Link>
  </li>);
}
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          SurveyDrop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {displaysurvey}
          </ul>
          {content}
        </div>
      </nav>
    );
  }
}

const mapstatetoprops = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapstatetoprops)(Header);
