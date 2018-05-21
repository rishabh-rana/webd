import React from "react";

const surveyfield = ({ input, label, placeholder, small, meta }) => {

  let error = null;
  let classname = "form-control";
  if (meta.touched) {
    classname = "form-control correctoutline";
  }
  if (meta.touched && meta.error) {
    error = meta.error;
    classname = "form-control erroroutline";
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...input}
        id={label}
        className={classname}
        placeholder={placeholder}
      />
      <small className="form-text text-muted">{small}</small>

      {meta.touched && error == null ? (
        <div className="no-error">Looks Good!</div>
      ) : (
        <div className="yes-error">{error}</div>
      )}
    </div>
  );
};
export default surveyfield;
