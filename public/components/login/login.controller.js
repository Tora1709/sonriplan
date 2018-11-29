(function() {
    'use strict'
    angular
        .module('Sonriplan')
        .controller('loginController', loginController);
        loginController.$inject = ['$q','$location','AuthService','SessionService','usuarioService'];

    function loginController($q,$location,AuthService,SessionService,usuarioService) {


      var vm = this;
      loadUsuarios();


      /*SessionService.destroy();*/

      /*Valida que los datos sean correctos*/
      vm.login = function(credentials){
        var usersList = vm.usuarios;
        var rol = '';
        var login = 0;
        login = AuthService.first(credentials, usersList)
        rol = AuthService.role(credentials, usersList);
          switch (rol) {
            case 'Admin':
              $location.path('/Home');
              break;
            case 'Secretaria general':
              $location.path('/Home');
              break;
            case 'Secretaria CR':
              $location.path('/Home');
              break;
            default:
              break;
          }
      }

      function loadUsuarios(){
        usuarioService.getUsers().then(function(response) {
          vm.usuarios = response.data;
        })
      }
 }
})();
