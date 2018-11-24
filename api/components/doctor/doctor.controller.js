var Doctor = require('./doctor.model.js');

module.exports.save = function(req, res) {

  var newDoctor = new Doctor({
    name: req.body.name,
    special: req.body.special,
    time: req.body.time,
    locate: req.body.locate,
    avalible: req.body.avalible
  });

  newDoctor.save(function(err) {
    if (err) {
      res.json({
        success: false,
        msg: 'No se pudo registrar a la Doctor' + err
      });
    } else {
      res.json({
        success: true,
        msg: 'Se registró la Doctor correctamente'
      });
    }
  });

}

module.exports.findAll = function(req, res) {
    Doctor.find().then(function(request) {
        res.send(request);
    })
};


module.exports.update = function(req, res) {
    console.log(req.body.id);
    Doctor.findByIdAndUpdate(req.body._id, {
        $set: req.body
    }).then(function(data) {
        res.json({
            success: true,
            msg: 'Se ha actualizado correctamente.'
        });
    });
}
