(function(){
  'use strict'
  angular
  .module('Sonriplan')
  .controller('userController', userController);
  userController.$inject = ['$http','$scope','userService'];

  function userController($http,$scope,userService){

    var vm = this;
    loadUsers();
    vm.user = {};
    vm.users = "";

    function loadUsers() {
      userService.getusers().then(function(response) {
        vm.users = response.data;
      })
    }



    vm.save = function(pNewUser) {
      userService.setSucursal(pNewUser);
      console.log(pNewUser);
      clean();
    }

    vm.getInfo = function(pUser) {
      }

    vm.update = function() {
      var userEdited = {

      }
      userService.updateSucursal(userEdited).then(function(response) {
        loadUsers();

      })
    }

    function clean() {
      vm.user = {}
    }
  }
})();
