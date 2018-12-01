(function () {
  'use strict'
  angular
    .module('Sonriplan')
    .controller('agendaController', agendaController);
  agendaController.$inject = ['$http', '$scope', 'doctorService', 'pacienteService', 'agendaService'];

  function agendaController($http, $scope, doctorService, pacienteService, agendaService) {

    var vm = this;
    loadDoctores();
    vm.doctor = {};
    vm.doctores = "";
    loadPacientes();
    vm.paciente = {};
    vm.pacientes = "";
    loadAgenda();
    console.log(vm.agenda);
    console.log('vm.agenda');
    // vm.agenda = {};

    function loadDoctores() {
      doctorService.getDoctores().then(function (response) {
        vm.doctores = response.data;
      })
      console.log(vm.doctores)
      console.log('vm.doctores')
    }
    function loadPacientes() {
      pacienteService.getPacientes().then(function (response) {
        vm.pacientes = response.data;
      })
    }
    function loadAgenda() {
      vm.agenda = {
        'day': "pato",
        'doctor': "5bf9bd424e18cf35d8e917ff"
      };
      // vm.agenda.day="julio";
      // vm.agenda.doctor="5bf9bd424e18cf35d8e917ff";
      
     
      agendaService.getAgenda(vm.agenda).then(function (response) {
        console.log(response);
        if (response.data.length==0) {
          var pAgenda = {
            doctor: vm.agenda.doctor,
            day: vm.agenda.day,
            citas: [
              {
                hora: "8:00 am-8:15 am",
                paciente:""
              },
              {
                hora: "8:15 am-8:30 am",
                paciente:""
              },
              {
                hora: "8:30 am-8:45 am",
                paciente:""
              }
            ]
          }
         // console(pAgenda.citas[1]);
          agendaService.setAgenda(pAgenda);
        } else {
          vm.agenda = response.data[0];
        }
      })
    }
    function clean() {
      vm.agenda = {}
    }
  }
})();
