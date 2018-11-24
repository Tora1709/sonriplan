var mongoose = require('mongoose');

var DoctorSchema = new mongoose.Schema({
  name : {type: String, required: false},
  special : {type: String, required: false},
  time : {type: String, required: false},
  locate : {type: String, required: false},
  avalible : {type: Boolean, required: false}
});

module.exports = mongoose.model('doctor', DoctorSchema);
