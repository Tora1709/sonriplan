var mongoose = require('mongoose');

var AgendaSchema = new mongoose.Schema({
    day: { type: String,required:false },
    doctor: { type: String,required:false },
    citas: [{
        hora: { type: String,required:false },
        paciente: { type: String,required:false }
    }]
});
module.exports = mongoose.model('agenda', AgendaSchema);