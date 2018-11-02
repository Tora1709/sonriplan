var mongoose = require('mongoose');

var PacienteSchema = new mongoose.Schema({
  name : {type: String, required: false},
  email : {type: String, required: false},
  id : {type: String, required: false},
  age : {type: String, required: false},
  phone : {type: String, required: false}
});

module.exports = mongoose.model('paciente', PacienteSchema);
