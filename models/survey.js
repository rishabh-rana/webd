const mongoose = require('mongoose');

const {Schema} = mongoose;

const recipient = new Schema({
  email:String,
  responded:{type:Boolean,default:false}
})

const Survey = new Schema({
  title: String,
  body: String,
  recipients: [recipient],
  subject : String,
  yes: {
    type:Number,
    default:0
  },
  yes: {
    type:Number,
    default:0
  },
  no: {
    type:Number,
    default:0
  },
  _user : {type: Schema.Types.ObjectId, ref: 'User'},
  date : Date,
  lastresponse : Date
})

mongoose.model('Survey',Survey);
