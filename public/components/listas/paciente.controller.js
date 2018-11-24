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

    function loadPacientes() {
      pacienteService.getPacientes().then(function(response) {
        vm.pacientes = response.data;
      })
    }



    vm.save = function(pNewPaciente) {
      pacienteService.setPaciente(pNewPaciente);
      clean();
    }

    vm.getInfo = function(pPaciente) {
      wm.paciente._id = pPaciente._id;
      wm.paciente.name = pPaciente.name;
      wm.paciente.email = pPaciente.email;
      wm.paciente.id = pPaciente.id;    
      wm.paciente.phone = pPaciente.phone;
      wm.paciente.age = pPaciente.age;
    }

    vm.update = function() {
      var pacienteEdited = {
        _id: wm.paciente._id,
        id: wm.paciente.id,
        name: wm.paciente.name,
        email: wm.paciente.email,
        phone: wm.paciente.phone,
        age: wm.paciente.age
      }
      pacienteService.updatePaciente(pacienteEdited).then(function(response) {
        loadPacientes();
        vm.id = null;
        vm.name = null;
        vm.email = null;
        vm.phone = null;
        vm.age = null;

      })
    }

    function clean() {
      vm.paciente = {}
    }
  }
})();
