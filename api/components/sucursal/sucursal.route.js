var express = require('express');
var router = express.Router();
var sucursalController = require('./sucursal.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id) {
  req.body.id = id;
  next();
});

router.route('/save_sucursal')
  .post(function(req, res) {
    sucursalController.save(req, res);
  });

router.route('/get_all_sucursal')
  .get(function(req, res) {
    sucursalController.findAll(req, res);
  });

router.route('/update_sucursal')
  .put(function(req, res) {
    sucursalController.update(req, res);
  });

  router.route('/delete_sucursal')
    .delete(function(req, res) {
      sucursalController.delete(req, res);
    });
module.exports = router;
