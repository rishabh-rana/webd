const checklogin = require('../middleware/checklogin');
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripesecret);
module.exports = app => {
  app.post("/api/pay",checklogin, async (req, res) => {

    const token = req.body.id;
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "paid for credits at surveydrop",
      source: token
    });
    req.user.credits += 5;
    const user = await req.user.save();
    console.log('from the server',user);
    res.send(user);
  });
};
