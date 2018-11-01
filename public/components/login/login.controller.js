(function() {
    'use strict'
    angular
        .module('Sonriplan')
        .controller('userController', userController);
        userController.$inject = ['$http','$scope','userService'];

    function userController($http,$scope,userService) {


      var vm = this;
      loadUsers();


      /*SessionService.destroy();*/

      /*Valida que los datos sean correctos*/
      vm.login = function(credentials){
        var usersList = vm.users;
        var rol = 0;
        var login = 0;
        login = AuthService.first(credentials, usersList)
        if (rol == 0) {
          rol = AuthService.role(credentials, usersList);
          switch (rol) {
            case 1:
              $location.path('/Home');
              break;
            case 2:
              $location.path('/Home');
              break;
            case 3:
              $location.path('/Home');
              break;
            case 4:
              $location.path('/Home');
              break;
            default:
              break;
          }
        }


      }

      function loadUsers(){
        userService.getUser().then(function (response){
          vm.users = response.data;
        })
      }
    }

})();
