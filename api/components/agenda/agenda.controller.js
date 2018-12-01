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
    Agenda.find({ 'doctor': req.query._id }).then(function (agendas) {
        res.send(agendas)
    })
}
module.exports.findAgenda = function (req, res) {
    // console.log(req)
    // console.log('req')
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
                    paciente: req.body.paciente
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
            'citas.$.paciente':req.body.paciente
        }
    })
}