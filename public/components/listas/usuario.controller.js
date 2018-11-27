(function(){
  'use strict'
  angular
  .module('Sonriplan')
  .controller('usuarioController',usuarioController);
  usuarioController.$inject = ['$http','$scope','usuarioService','$q'];

  function usuarioController($http,$scope,usuarioService,$q){

    var vm = this;
    loadUsuarios();
    vm.usuario = {};
    vm.usuarios = "";

  function loadUsuarios(){
    usuarioService.getUsers().then(function(response) {
      vm.usuarios = response.data;
    })
  }


    vm.save = function(pNewUsuario) {
      usuarioService.setUser(pNewUsuario);
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
      usuarioService.updateUser(pUserModified).then(function(response) {
        loadUsuarios();
        vm.id = null;
        vm.name = null;
        vm.email = null;
        vm.rol = null;
        vm.locate = null;

      })
    }

    function clean() {
      vm.usuario = {}
    }
  }
})();
