const checklogin = require("../middleware/checklogin");
const checkcredits = require("../middleware/checkcredits");
const mongoose = require("mongoose");
const _ = require("lodash");
const Path = require("path-parser");
const { URL } = require("url");
const template = require("../services/emailtemplate");
const Mailer = require("../services/mailer");
const Survey = mongoose.model("Survey");
module.exports = app => {

  app.get('/api/surveys/:id/:choice', (req,res)=> {
    res.send('Thanks for voting!');
  });

  app.get('/api/surveys', async (req,res)=> {
    const surveys = await Survey.find({ _user : req.user.id}).select({recipients : false} );
    res.send(surveys);
  })

  app.post("/api/surveys", checklogin, checkcredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      date: Date.now()
    });

    const mailer = new Mailer(survey, template(survey));

    try {
      await mailer.send();
      await survey.save();
      req.user.credits--;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyid/:choice");
    _.chain(req.body)
      .map(event => {
        const match = p.test(new URL(event.url).pathname);
        if (match) {
          return { email: event.email, ...match };
        }
      })
      .compact()
      .uniqBy("email", "surveyid")
      .each(event => {
        Survey.updateOne(
          {
            _id: event.surveyid,
            recipients: {
              $elemMatch: { email: event.email, responded: false }
            }
          },
          {
            $inc: { [event.choice]: 1 },
            $set: { "recipients.$.responded": true }
          }
        ).exec();
      })
      .value();

    res.send({});
  });
};
