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

  function init(){
    vm.usuario = {};
  }init();

    vm.save = function(pNewUsuario) {
      usuarioService.setUser(pNewUsuario);
      clean();
      init();
    }

    vm.getInfo = function(pUsuario) {
      vm.usuario._id = pUsuario._id;
      vm.usuario.name = pUsuario.name;
      vm.usuario.pass = pUsuario.pass;
      vm.usuario.email = pUsuario.email;
      vm.usuario.rol = pUsuario.rol;
      vm.usuario.locate = pUsuario.locate;
      $("#Edit").modal();
      vm.showFomrEdit = true;
    }

    vm.update = function() {
      var pUserModified = {
        _id: vm.usuario._id,
        id: vm.usuario.id,
        name: vm.usuario.name,
        pass: vm.usuario.pass,
        email: vm.usuario.email,
        rol: vm.usuario.rol,
        locate: vm.usuario.locate
      }
      usuarioService.updateUser(pUserModified).then(function(response) {
        loadUsuarios();
        vm.id = null;
        vm.name = null;
        vm.pass = null;
        vm.email = null;
        vm.rol = null;
        vm.locate = null;

      });
      vm.showFomrEdit = false;
      init();
    }

    function clean() {
      vm.usuario = {}
    }
  }
})();
