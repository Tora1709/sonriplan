var express = require('express');
var router = express.Router();
var userController = require('./user.controller.js');

//para aquellas rutas que ocupen un id
router.param('id', function(req, res, next, id) {
  req.body.id = id;
  next();
});

router.route('/save_user')
  .post(function(req, res) {
    userController.save(req, res);
  });

router.route('/get_all_user')
  .get(function(req, res) {
    userController.findAll(req, res);
  });

router.route('/update_usuario')
  .put(function(req, res) {
    userController.update(req, res);
  });

router.route('/delete_usuario')
  .delete(function(req, res) {
    userController.delete(req, res);
  });

module.exports = router;
