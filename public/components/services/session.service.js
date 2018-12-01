(function(){
	'use strict';
	angular
	.module('Sonriplan')
	.service('SessionService', SessionService);

	SessionService.$inject = ['$q','userService'];
	/*Funcion para guardar la sesion*/
	function SessionService($q,userService){
		var vm = this;

		vm.create = function(user) {
			localStorage.setItem('session', JSON.stringify(user));
		};
		/*Funcion para borrar la sesion*/
		vm.destroy = function(){
			localStorage.removeItem('session');
		};
	};
})()
