import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';

 const ss = (props) => {
  return (
    <div className='container alignleft'>

    <h5 className='warningheader'>Please confirm all the entries, This action cannot be undone</h5>

    <div className='form-group'>
    <label>Survey Title</label>
    <input
      className='form-control'
      disabled
      value={props.values.title}
    />
    </div>
    <div className='form-group'>
    <label>Subject</label>
    <input
      className='form-control'
      disabled
      value={props.values.subject}
    />
    </div>
    <div className='form-group'>
    <label>Message</label>
    <input
      className='form-control'
      disabled
      value={props.values.body}
    />
    </div>
    <hr className='spacedhr'/>
    <div className='form-group'>
    <label>Recipients</label>
    <input
      className='form-control'
      disabled
      value={props.values.recipients}
    />
    </div>
    <button onClick={props.clicked} className='btn btn-md btn-danger'>back</button>
    <button onClick={() => props.sendSurvey(props.values,props.history)} className="btn btn-md btn-success floatright">
      Send
    </button>
    </div>
  )
}

const mapstatetoprops=(state)=>{
  return {
    values : state.form.surveyForm.values
  }
}
export default connect(mapstatetoprops,actions)(withRouter(ss));
