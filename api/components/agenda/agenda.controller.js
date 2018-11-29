var Agenda = require('./agenda.model');
module.exports.save = function (req, res) {
    var newAgenda = new Agenda(
        {
            day: req.body.day,
            citas: req.body.citas,
            doctor: req.body.doctor
        }
    );
    newAgenda.save(function (err) {
        if (err) {
            res.json({
                success: false,
                msg: 'No se pudo crear la agenda' + err
            });
        } else {
            res.json({
                success: true,
                msg: 'Se creo la agenda correctamente'
            });
        }
    })
}
module.exports.findDoctorAgenda = function (req, res) {
    Agenda.find({ 'doctor': req.body.doctor }).then(function (agendas) {
        res.send(agendas)
    })
}
module.exports.findAgenda = function (req, res) {
    Agenda.find({ 'doctor': req.body.doctor, 'day': req.body.day }).then(function (agenda) {
        res.send(agenda)
    })
}
module.exports.addCitas = function (req, res) {
    Agenda.update({
        _id: req.body._id
    }, {
            $push: {
                'citas': {
                    hora: req.body.hora,
                    paciente1: req.body.paciente1,
                    paciente2: req.body.paciente2,
                    paciente3: req.body.paciente3,
                    paciente4: req.body.paciente4,
                    paciente5: req.body.paciente5,
                }
            }
        }
    )
}
module.exports.updateCitas=function(req,res){
    Agenda.findOneAndUpdate({
        _id:req.body._id,"citas._id":req.body._idCita
    },{
        "$set":{
            'citas.$.paciente1':eq.body.paciente1,
            'citas.$.paciente2':eq.body.paciente2,
            'citas.$.paciente3':eq.body.paciente3,
            'citas.$.paciente4':eq.body.paciente4,
            'citas.$.paciente5':eq.body.paciente5,
        }
    })
}