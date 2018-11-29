//Dependencias
var mongoose = require('mongoose');
//Creando esquemas
var UserSchema = new mongoose.Schema({
    name: { type: String},
    pass: { type: String},
    email: { type: String},
    pass : { type: String},
    rol : { type: String},
    locate : { type: String}
});

module.exports = mongoose.model('user', UserSchema);
