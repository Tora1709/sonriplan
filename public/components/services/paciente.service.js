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
        updatePaciente: _updatePaciente,
        deletePaciente: _deletePaciente
      };
      return publicAPI;

      function _setPaciente(pPaciente) {
        return $http.post('http://localhost:3000/api/save_paciente',pPaciente);
      }

      function _getPacientes() {
        return $http.get('http://localhost:3000/api/get_all_paciente');
      }

      function _updatePaciente(pPacienteModified) {
        return $http.put('http://localhost:3000/api/update_paciente',pPacienteModified);
      }

      function _deletePaciente(pPacienteModified) {
        return $http.delete('http://localhost:3000/api/delete_paciente',pPacienteModified);
      }


      var paciente = null;

      for (var i = 0; i < pacientesList.length; i++) {
        if ( pacientesList[i].id == uniqueId) {
            paciente = pacientesList[i];
            return paciente ;
        }
      }




    }
})();
