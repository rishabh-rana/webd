const passport = require("passport");
const strategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys.js");
const mongoose = require("mongoose");
const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});
passport.use(
  new strategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googlesecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshtoken, profile, done) => {
      const founduser = await User.findOne({ googleid: profile.id });
      if (founduser) {
        done(null, founduser);
      } else {
        const user = await new User({ googleid: profile.id }).save();
        done(null, user);
      }
    }
  )
);
