(function(){
  'use strict'
  angular
  .module('Sonriplan')
  .controller('sucursalController', sucursalController);
  sucursalController.$inject = ['$http','$scope','sucursalService'];

  function sucursalController($http,$scope,sucursalService){

    var vm = this;
    loadSucursales();
    vm.sucursal = {};
    vm.sucursales = "";

    function loadSucursales() {
      sucursalService.getSucursales().then(function(response) {
        vm.sucursales = response.data;
      })
    }

    function init() {
      vm.sucursal = {};
    }init();


    vm.save = function(pNewSucursal) {
      sucursalService.setSucursal(pNewSucursal);
      console.log(pReserve);
      init();
      clean();
    }

    vm.getInfo = function(pSucursal) {
      wm.sucursal._id = pSucursal._id;
      wm.sucursal.name = pSucursal.name;
      wm.sucursal.locate = pSucursal.locate;
    }

    vm.update = function() {
      var sucursalEdited = {
        _id: wm.sucursal._id,
        name: wm.sucursal.name,
        locate: wm.sucursal.locate
      }
      sucursalService.updateSucursal(sucursalEdited).then(function(response) {
        loadSucursales();
        vm.name = null;
        vm.locate = null;
      })
    }

    function clean() {
      vm.sucursal = {}
    }
  }
})();
