var Sucursal = require('./sucursal.model.js');
var nodemailer = require('nodemailer');

module.exports.save = function(req, res) {

  var newSucursal = new Sucursal({
    name: req.body.name,
    locate: req.body.locate
  });

  newSucursal.save(function(err) {
    if (err) {
      res.json({
        success: false,
        msg: 'No se pudo registrar a la sucursal' + err
      });
    } else {
      res.json({
        success: true,
        msg: 'Se registró la sucursal correctamente'
      });
    }
  });

}

module.exports.findAll = function(req, res) {
    Sucursal.find().then(function(request) {
        res.send(request);
    })
};


module.exports.update = function(req, res) {
    console.log(req.body.id);
    Sucursal.findByIdAndUpdate(req.body._id, {
        $set: req.body
    }).then(function(data) {
        res.json({
            success: true,
            msg: 'Se ha actualizado correctamente.'
        });
    });
}
