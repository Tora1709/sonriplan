(function(){
  'use strict'
  angular
  .module('Sonriplan')
  .controller('pacienteController', pacienteController);
  pacienteController.$inject = ['$http','$scope','pacienteService'];

  function pacienteController($http,$scope,pacienteService){

    var vm = this;
    loadPacientes();
    vm.paciente = {};
    vm.pacientes = "";
    vm.showFomrEdit = false;

    function loadPacientes() {
      pacienteService.getPacientes().then(function(response) {
        vm.pacientes = response.data;
      })
    }

    function init(){
      vm.paciente = {};
    }init();


    vm.save = function(pNewPaciente) {
      pacienteService.setPaciente(pNewPaciente);
      clean();
      init();
    }

    vm.getInfo = function(pPaciente) {
      vm.paciente._id = pPaciente._id;
      vm.paciente.name = pPaciente.name;
      vm.paciente.email = pPaciente.email;
      vm.paciente.id = pPaciente.id;
      vm.paciente.phone = pPaciente.phone;
      vm.paciente.age = pPaciente.age;
      $("#Edit").modal();
      vm.showFomrEdit = true;
    }

    vm.update = function() {
      var pacienteEdited = {
        _id: vm.paciente._id,
        id: vm.paciente.id,
        name: vm.paciente.name,
        email: vm.paciente.email,
        phone: vm.paciente.phone,
        age: vm.paciente.age
      }
      pacienteService.updatePaciente(pacienteEdited).then(function(response) {
        loadPacientes();
        vm.id = null;
        vm.name = null;
        vm.email = null;
        vm.phone = null;
        vm.age = null;

      });

      vm.showFomrEdit = false;
      init();
    }

    function clean() {
      vm.paciente = {}
    }
  }
})();
