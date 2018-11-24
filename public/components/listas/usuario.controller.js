(function(){
  'use strict'
  angular
  .module('Sonriplan')
  .controller('usuarioController',usuarioController);
  usuarioController.$inject = ['$http','$scope','userService'];

  function usuarioController($http,$scope,userService){

    var vm = this;
    loadUsuarios();
    vm.usuario = {};
    vm.usuarios = "";

    function loadUsuarios() {
      userService.getUsers().then(function(response) {
        vm.usuarios = response.data;
      })
    }



    vm.save = function(pNewUsuario) {
      userService.setUser(pNewUsuario);
      clean();
    }

    vm.getInfo = function(pUsuario) {
      wm.usuario._id = pUsuario._id;
      wm.usuario.name = pUsuario.name;
      wm.usuario.email = pUsuario.email;
      wm.usuario.rol = pUsuario.rol;
      wm.usuario.locate = pUsuario.locate;
    }

    vm.update = function() {
      var pUserModified = {
        _id: wm.usuario._id,
        id: wm.usuario.id,
        name: wm.usuario.name,
        email: wm.usuario.email,
        rol: wm.usuario.rol,
        locate: wm.usuario.locate
      }
      userService.updateUser(pUserModified).then(function(response) {
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
