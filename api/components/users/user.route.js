var express = require('express');
var router = express.Router();
var reserveController = require('./user.controller.js');

//para aquellas rutas que ocupen un id
router.param('id', function(req, res, next, id) {
    req.body.id = id;
    next();
});

router.route('/save_user')
    .post(function(req, res) {
        reserveController.save(req, res);
    });

router.route('/get_all_user')
    .get(function(req, res) {
        reserveController.findAll(req, res);
    });

module.exports = router;
