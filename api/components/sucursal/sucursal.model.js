var mongoose = require('mongoose');

var SucursalSchema = new mongoose.Schema({
  name : {type: String, required: false},
  locate : {type: String, required: false}
});

module.exports = mongoose.model('sucursal', SucursalSchema);
