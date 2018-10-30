(function() {
  angular
    .module('Sonriplan', ['appRoutes', 'ngMaterial', 'LocalStorageModule', 'ngAnimate'])
    .config(function() {
      // $mdThemingProvider.theme('default')
      //   .primaryPalette('indigo')
      //   .accentPalette('blue-grey');
      // $mdThemingProvider.theme('default').foregroundPalette[3] = "rgb(255, 255, 255)";
    	this.myDate = new Date();
  		this.isOpen = false;
    })


  
})();
