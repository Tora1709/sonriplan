var Paciente = require('./paciente.model.js');

module.exports.save = function(req, res) {

  var newPaciente = new Paciente({
    name: req.body.name,
    email: req.body.email,
    id: req.body.id,
    age: req.body.age,
    phone: req.body.phone
  });

  newPaciente.save(function(err) {
    if (err) {
      res.json({
        success: false,
        msg: 'No se pudo registrar a la Paciente' + err
      });
    } else {
      res.json({
        success: true,
        msg: 'Se registró la Paciente correctamente'
      });
    }
  });

}

module.exports.findAll = function(req, res) {
    Paciente.find().then(function(request) {
        res.send(request);
    })
};


module.exports.update = function(req, res) {
    console.log(req.body.id);
    Paciente.findByIdAndUpdate(req.body._id, {
        $set: req.body
    }).then(function(data) {
        res.json({
            success: true,
            msg: 'Se ha actualizado correctamente.'
        });
    });
}
