const mongoose = require("mongoose");

const { Schema } = mongoose;

const userschema = new Schema({
  googleid: String
});

mongoose.model("User", userschema);
