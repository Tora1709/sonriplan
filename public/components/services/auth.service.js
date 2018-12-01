(function(){
	'use strict';
	angular
	.module('Sonriplan')
	.service('AuthService', AuthService);

	AuthService.$inject = ['$q','$http','SessionService','localStorageService','userService'];

	function AuthService($q,$http, SessionService, localStorageService, userService){
		var service = {
			// logIn : _logIn,
			logOut : _logOut,
			role : _role,
			getAuthUser: _getAuthUser
		};
		return service;

		function _role(puserLogin, pusers) {
      var userList = pusers;
      var nTamanno = userList.length;
      var rol = 0;
      for (var i = 0; i < nTamanno; i++) {
        if (puserLogin.email == userList[i].email && puserLogin.pass == userList[i].pass) {
          SessionService.create(userList[i]);
          switch (userList[i].rol) {
            case 'Admin':
              rol = 1;
              break;
            case 'Secretaria general':
              rol = 2;
              break;
            case 'Secretaria CR':
              rol = 3;
              break;
            default:
              rol = 0;
              break;
          }
        }
      }
      return rol;
    }


		function _logOut(){
			SessionService.destroy();
		}

		function _getAuthUser(){
			var userLogged = JSON.parse(localStorage.getItem('session'));

			return userLogged
		}
  }

})();
