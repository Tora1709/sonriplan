(function(){
	'use strict'
	angular
		.module('appRoutes', ['ui.router', 'oc.lazyLoad', 'ngMessages', 'angularCSS', 'ngAnimate'])
		.config(configuration);

	configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configuration($stateProvider, $urlRouterProvider){
		$stateProvider

		.state('home',{
			url: '/Home',
			templateUrl: './components/login/principal.html',
			css: './css/assets/css/material-kit.css'
		})

		.state('login',{
			url: '/Login',
			templateUrl: './components/login/login-page.html',
			css: './css/assets/css/material-kit.css'
			//resolve: {
        //            load: ['$ocLazyLoad', function($ocLazyLoad) {
          //              return $ocLazyLoad.load('./components/login/login.controller.js')
            //        }]
              //  },
                //controller: 'userController',
                //controllerAs: 'vm'
		})

		.state('agenda',{
			url: '/Agenda',
			templateUrl: './components/calendar/agendav1.html',
			css: './css/calendar.css'
		})

		.state('usuarios',{
			url: '/Usuarios',
			templateUrl: './components/listas/listadoUsuarios.html',
			css: './css/calendar.css'
		})

		.state('sucursales',{
			url: '/Sucursales',
			templateUrl: './components/listas/ListaSucursales.html',
			css: './css/calendar.css',
				resolve:{
					load: ['$ocLazyLoad', function($ocLazyLoad) {
							return $ocLazyLoad.load('./components/listas/sucursal.controller.js')
					}]
				},
				controller: 'sucursalController',
				controllerAs: 'vm'
		})

		.state('doctores',{
			url: '/Doctores',
			templateUrl: './components/listas/ListaDoctores.html',
			css: './css/calendar.css'
		})

		.state('pacientes',{
			url: '/Pacientes',
			templateUrl: './components/listas/ListaPacientes.html',
			css: './css/calendar.css',
			resolve:{
				load: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load('./components/listas/paciente.controller.js')
				}]
			},
			controller: 'pacienteController',
			controllerAs: 'vm'
		})
		$urlRouterProvider.otherwise('/Login');
  };
})();
