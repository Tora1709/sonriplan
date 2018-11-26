//Dependencias
var mongoose = require('mongoose');
//Creando esquemas
var UserSchema = new mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: false },
    pass : { type: String, required: false},
    rol : { type: String, required: false},
    locate : { type: String, required: false}
});

module.exports = mongoose.model('user', UserSchema);
