import React,{Component} from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import Spinner from './spinner';
import Showsurvey from './showsurvey';
import * as actions from '../actions/index';
class dashboard extends Component {

  componentDidMount () {
      this.props.fetchSurvey();
  }

  render(){

    let content = <Spinner />;
    if(this.props.state && this.props.state.surveys){
      content = (this.props.state.surveys.map(survey => {

          return <Showsurvey survey={survey} key={survey._id}/>
      }) )


    }
    return (
      <div className="container">
        <button className="btn btn-lg btn-primary"><Link className='nav-link createsurveybtn' to='/surveys/new'> Create a new Survey </Link></button>
          {content}
      </div>
    );
  }

};

const mapstatetoprops = (state) => {
  return {
    state : state.auth
  }
}

export default connect(mapstatetoprops,actions)(dashboard);
