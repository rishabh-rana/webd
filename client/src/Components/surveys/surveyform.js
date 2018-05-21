import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import Surveyfield from "./surveyfield";
import { Link } from "react-router-dom";
import validateEmail from '../../utils/validateemail';

class Surveyform extends Component {

  render() {
    return (
      <div className="container alignleft">
        <form onSubmit={this.props.handleSubmit(this.props.clicked)}>
          <Field
            type="text"
            name="title"
            component={Surveyfield}
            label="Survey Title"
            placeholder="Enter Title"
          />
          <Field
            type="text"
            name="subject"
            component={Surveyfield}
            label="Subject"
            placeholder="Enter Subject"
            small="This is the subject of the e-mail to be sent"
          />
          <Field
            type="text"
            name="body"
            component={Surveyfield}
            label="Message"
            placeholder="Enter Body"
            small="This is the body of the e-mail"
          />
          <hr className='spacedhr'/>
          <Field
            type="text"
            name="recipients"
            component={Surveyfield}
            label="Recipients"
            placeholder="Enter E-mails of recipients"
            small="Enter the comma seperated list of recipient emails"
          />
          <Link to="/surveys" className="btn btn-md btn-danger">
            Back
          </Link>
          <button type='submit' className="btn btn-md btn-primary floatright">
            Continue
          </button>

        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors ={};

  if(!values.title || (values.title && !values.title.trim())){
    errors.title = 'You must provide a title';
  }
  if(!values.subject || (values.subject && !values.subject.trim())){
    errors.subject = 'You must provide a subject';
  }
  if(!values.body || (values.body && !values.body.trim())){
    errors.body = 'You must provide a body';
  }
    errors.recipients = validateEmail(values.recipients || '');

  if(!values.recipients || (values.recipients && !values.recipients.trim())){
    errors.recipients = 'You must have atleast one recipient';
  }



  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(Surveyform);
