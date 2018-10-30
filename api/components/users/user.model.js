//Dependencias
var mongoose = require('mongoose');
//Creando esquemas
var ReserveSchema = new mongoose.Schema({
    email: { type: String, required: true },
    pass : { type: String, required: true},
    rol : { type: String}
});

module.exports = mongoose.model('User', ReserveSchema);