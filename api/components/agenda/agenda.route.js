var express = require('express');
var router = express.Router();
var agendaController = require('./agenda.controller');

//para aquellas rutas que ocupen un id

router.param('id', function (req, res, next, id) {
    req.body.id = id;
    next();
});

router.route('/save_agenda')
    .post(function (req, res) {
        agendaController.save(req, res);
    });

router.route('/get_doctor_agenda')
    .get(function (req, res) {
        agendaController.findDoctorAgenda(req, res);
    });

router.route('/get_agenda')
    .post(function (req, res) {
        agendaController.findAgenda(req, res);
    });

router.route('/update_citas')
    .put(function (req, res) {
        agendaController.updateCitas(req, res);
    });
    
router.route('/add_citass')
    .put(function (req, res) {
        agendaController.updateCitas(req, res);
    });

module.exports = router;
