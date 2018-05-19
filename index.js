const express = require("express");
const cookies = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys.js");
const mongoose = require("mongoose");
require("./models/user.js");

const app = express();

mongoose.connect(keys.mongoURI);

require("./services/passport.js");

app.use(
  cookies({
    maxAge: 30 * 24 * 3600 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authroutes")(app);

app.get("/", function(req, res) {
  res.send(req.user);
});

app.listen(process.env.PORT || 3000, process.env.IP);
