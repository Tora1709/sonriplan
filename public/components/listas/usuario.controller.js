(function(){
  'use strict'
  angular
  .module('Sonriplan')
  .controller('usuarioController', usuarioController);
  usuarioController.$inject = ['$http','$scope','usuariosService'];

  function pacienteController($http,$scope,usuariosService){

    var vm = this;
    loadUsuarios();
    vm.usuario = {};
    vm.usuarios = "";

    function loadUsuarios() {
      usuariosService.getUsuarios().then(function(response) {
        vm.usuarios = response.data;
      })
    }



    vm.save = function(pNewUsuario) {
      usuariosService.setUsuarios(pNewUsuario);
      clean();
    }

    vm.getInfo = function(pUsuario) {
      wm.paciente._id = pPaciente._id;
      wm.paciente.name = pUsuario.name;
      wm.paciente.email = pUsuario.email;
      wm.paciente.id = pUsuario.id;
      wm.paciente.phone = pUsuario.phone;
      wm.paciente.age = pUsuario.age;
    }

    vm.update = function() {
      var usuarioEdited = {
        _id: wm.usuario._id,
        id: wm.usuario.id,
        name: wm.usuario.name,
        email: wm.usuario.email,
        phone: wm.usuario.phone,
        age: wm.usuario.age
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
