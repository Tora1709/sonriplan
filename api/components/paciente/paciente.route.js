var express = require('express');
var router = express.Router();
var pacienteController = require('./paciente.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id) {
  req.body.id = id;
  next();
});

router.route('/save_paciente')
  .post(function(req, res) {
    pacienteController.save(req, res);
  });

router.route('/get_all_paciente')
  .get(function(req, res) {
    pacienteController.findAll(req, res);
  });

router.route('/update_paciente')
  .put(function(req, res) {
    pacienteController.update(req, res);
  });

  router.route('/delete_paciente')
    .delete(function(req, res) {
      pacienteController.delete(req, res);
    });

module.exports = router;
