import React, { Component } from "react";
import Surveyform from "./surveyform";
import Surveyreview from './surveyreview';
import {reduxForm} from 'redux-form';

class Surveynew extends Component {

  state = {
    showreview : false
  }



  render() {
    let content = (<Surveyform clicked={() => this.setState({showreview:true})}/>);
    if(this.state.showreview){
      content = (<Surveyreview clicked={() => this.setState({showreview:false})} />);
    }
    return (
      <div>

        {content}
      </div>
    );
  }
}

export default reduxForm({
  form : 'surveyForm'
})(Surveynew);
