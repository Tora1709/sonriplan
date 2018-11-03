(function() {
  'use strict'
  angular

    .module('Sonriplan')
    .service('doctorService', doctorService);
    doctorService.$inject=['$http'];


    function doctorService($http) {

      var doctot = [];

      var publicAPI = {
        setDoctor: _setDoctor,
        getDoctores: _getDoctores,
        updateDoctor: _updateDoctor
      };
      return publicAPI;

      function _setDoctor(pDoctor) {
        console.log(pDoctor);
        return $http.post('http://localhost:3000/api/save_doctor',pDoctor);
      }

      function _getDoctores() {
        return $http.get('http://localhost:3000/api/get_all_doctor');
      }

      function _updateDoctor(pDoctorModified) {
        return $http.put('http://localhost:3000/api/update_doctor',pDoctorModified);
      }


      var sucursal = null;

      for (var i = 0; i < doctoresList.length; i++) {
        if ( doctoresList[i].id == uniqueId) {
            doctor = doctoresList[i];
            return doctor ;
        }
      }


    }
})();
