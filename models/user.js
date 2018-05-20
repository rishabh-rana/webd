const mongoose = require("mongoose");

const { Schema } = mongoose;

const userschema = new Schema({
  googleid: String,
  credits: {
    type: Number,
    default: 0
  },
  loadingcredits: {
    type: Boolean,
    default : false
  }
});

mongoose.model("User", userschema);
