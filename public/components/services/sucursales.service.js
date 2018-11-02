(function() {
  'use strict'
  angular

    .module('Sonriplan')
    .service('sucursalService', sucursalService);
    sucursalService.$inject=['$http'];


    function sucursalService($http) {

      var sucursal = [];

      var publicAPI = {
        setSucursal: _setSucursal,
        getSucursales: _getSucursales,
        updateSucursal: _updateSucursal
      };
      return publicAPI;

      function _setSucursal(pSucursal) {
        console.log(pSucursal);
        return $http.post('http://localhost:3000/api/save_sucursal',pSucursal);
      }

      function _getSucursales() {
        return $http.get('http://localhost:3000/api/get_all_sucursal');
      }

      function _updateSucursal(pSucursalModified) {
        return $http.put('http://localhost:3000/api/update_sucursal',pSucursalModified);
      }


      var sucursal = null;

      for (var i = 0; i < sucursalesList.length; i++) {
        if ( sucursalesList[i].id == uniqueId) {
            sucursal = sucursalesList[i];
            return sucursal ;
        }
      }

      function _updateTeacher(pSucursalModified) {
        return $http.put('http://localhost:3000/api/update_sucursal',pSucursalModified);
      }


    }
})();
