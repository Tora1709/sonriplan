(function() {
    'use strict'
    angular
        .module('Sonriplan')
        .controller('loginController', loginController);
        loginController.$inject = ['$q','$location','AuthService','SessionService','usuarioService'];

    function loginController($q,$location,AuthService,SessionService,usuarioService) {


      var vm = this;

      loadUsuarios();


      SessionService.destroy();

      /*Valida que los datos sean correctos*/
      vm.login = function(credentials){
        var usersList = vm.usuarios;
        var rol = 0;

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
            default:
            $("#Error").modal();
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
