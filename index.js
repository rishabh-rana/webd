const express = require("express");
const cookies = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys.js");
const mongoose = require("mongoose");
require("./models/user.js");

const app = express();

mongoose.connect(keys.mongoURI);

require("./services/passport.js");
app.use(bodyParser.json());

app.use(
  cookies({
    maxAge: 30 * 24 * 3600 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authroutes")(app);
require("./routes/billingroutes")(app);

if (process.env.NODE_ENV==='production') {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, process.env.IP);
