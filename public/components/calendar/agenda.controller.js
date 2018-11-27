(function(){
  'use strict'
  angular
  .module('Sonriplan')
  .controller('agendaController', agendaController);
  agendaController.$inject = ['$http','$scope','doctorService','pacienteService'];

  function agendaController($http,$scope,doctorService,pacienteService){

    var vm = this;
    loadDoctores();
    vm.doctor = {};
    vm.doctores = "";
    loadPacientes();
    vm.paciente = {};
    vm.pacientes = "";

    function loadDoctores() {
      doctorService.getDoctores().then(function(response) {
        vm.doctores = response.data;
      })
    }
    function loadPacientes() {
      pacienteService.getPacientes().then(function(response) {
        vm.pacientes = response.data;
      })
    }


    function clean() {
      vm.agenda = {}
    }
  }
})();
