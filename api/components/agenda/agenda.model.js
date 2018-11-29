var mongoose = require('mongoose');

var agendaSchema = new mongoose.Schema(
    {
        day: { type: String },
        citas: [
            {
                hora: { type: String },
                paciente1: { type: String },
                paciente2: { type: String },
                paciente3: { type: String },
                paciente4: { type: String },
                paciente5: { type: String }
            }
        ],
        doctor:{type:String}
    }

);
module.exports = mongoose.model('agenda', agendaSchema);