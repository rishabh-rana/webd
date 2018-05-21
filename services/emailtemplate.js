module.exports = (survey) => {
  return `
  <html>
  <body>
    <div style='text-align: center;'>
      <h3>I'd Like your input!</h3>
      <p>
        Please answer the question below
      </p>
      <p>
        ${survey.body}
      </p>
      <div style='background: dodgerblue;'>
        <a href='http://localhost:3000/api/surveys/${survey.id}/yes'>Yes</a>

      </div>
      <div style='background: salmon;'>
        <a href='http://localhost:3000/api/surveys/${survey.id}/no'>No</a>

      </div>
    </div>
  </body>
  </html>
  `
};
