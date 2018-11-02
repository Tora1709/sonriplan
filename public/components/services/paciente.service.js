(function() {
  'use strict'
  angular

    .module('Sonriplan')
    .service('pacienteService', pacienteService);
    pacienteService.$inject=['$http'];


    function pacienteService($http) {

      var paciente = [];

      var publicAPI = {
        setPaciente: _setPaciente,
        getPacientes: _getPacientes,
        updatePaciente: _updatePaciente
      };
      return publicAPI;

      function _setPaciente(pPaciente) {
        console.log(Paciente);
        return $http.post('http://localhost:3000/api/paciente',pPaciente);
      }

      function _getPacientes() {
        return $http.get('http://localhost:3000/api/paciente');
      }

      function _updatePaciente(pPacienteModified) {
        return $http.put('http://localhost:3000/api/paciente',pPacienteModified);
      }


      var paciente = null;

      for (var i = 0; i < pacientesList.length; i++) {
        if ( pacientesList[i].id == uniqueId) {
            paciente = pacientesList[i];
            return paciente ;
        }
      }

      function _updateTeacher(pPacienteModified) {
        return $http.put('http://localhost:3000/api/update_paciente',pPacienteModified);
      }


    }
})();
