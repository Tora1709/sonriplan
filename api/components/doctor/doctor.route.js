var express = require('express');
var router = express.Router();
var doctorController = require('./doctor.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id) {
  req.body.id = id;
  next();
});

router.route('/save_doctor')
  .post(function(req, res) {
    doctorController.save(req, res);
  });

router.route('/get_all_doctor')
  .get(function(req, res) {
    doctorController.findAll(req, res);
  });

router.route('/update_doctor')
  .put(function(req, res) {
    doctorController.update(req, res);
  });

module.exports = router;
