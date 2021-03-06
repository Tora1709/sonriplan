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
        updateSucursal: _updateSucursal,
        deleteSucursal: _deleteSucursal
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

      function _deleteSucursal(pSucursalModified) {
        return $http.delete('http://localhost:3000/api/delete_sucursal',pSucursalModified);
      }


      var sucursal = null;

      for (var i = 0; i < sucursalesList.length; i++) {
        if ( sucursalesList[i].id == uniqueId) {
            sucursal = sucursalesList[i];
            return sucursal ;
        }
      }



    }
})();
