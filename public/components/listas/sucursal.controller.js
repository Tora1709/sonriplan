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

    function init(){
      vm.sucursal = {};
    }init();


    vm.save = function(pNewSucursal) {
      sucursalService.setSucursal(pNewSucursal);
      console.log(pNewSucursal);
      init();
      clean();
    }

    vm.getInfo = function(pSucursal) {
      vm.sucursal._id = pSucursal._id;
      vm.sucursal.name = pSucursal.name;
      vm.sucursal.locate = pSucursal.locate;
      $("#Edit").modal();
      vm.showFomrEdit = true;
    }

    vm.update = function() {
      var sucursalEdited = {
        _id: vm.sucursal._id,
        name: vm.sucursal.name,
        locate: vm.sucursal.locate
      }
      sucursalService.updateSucursal(sucursalEdited).then(function(response) {
        loadSucursales();
        vm.name = null;
        vm.locate = null;
        vm.showFomrEdit = false;
      });
      vm.showFomrEdit = false;
      init();
      clean();
    }

    vm.getInfo2 = function(pSucursal) {
      vm.sucursal._id = pSucursal._id;
      vm.sucursal.name = pSucursal.name;
      vm.sucursal.locate = pSucursal.locate;
      $("#Erase").modal();
      vm.showFomrEdit = true;
    }

    vm.delete = function() {
      var sucursalEdited = {
        _id: vm.sucursal._id,
        name: vm.sucursal.name,
        locate: vm.sucursal.locate
      }
      sucursalService.deleteSucursal(sucursalEdited).then(function(response) {
        loadSucursales();
        vm.name = null;
        vm.locate = null;
        vm.showFomrEdit = false;
      });
      vm.showFomrEdit = false;
      init();
      clean();
    }

    function clean() {
      vm.sucursal = {}
    }
  }
})();
