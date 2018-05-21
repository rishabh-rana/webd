import React from "react";

const showsurvey = survey => {

  return (

    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> {survey.survey.title} </h5>
        <div className="card-text">
          <div>Responses to the survey:</div>
          <div> Yes: {survey.survey.yes} </div>
          <div> No: {survey.survey.no} </div>
        </div>
      </div>
    </div>
  );
};
export default showsurvey;
