(function () {
    angular
        .module('Sonriplan')
        .service('agendaService', agendaService);
    agendaService.$inject = ['$http'];

    
    function agendaService($http) {
        var agendas = [];
        var publicAPI = {
            setAgenda: _setAgenda,
            getAgendas: _getAgendas,
            updateCita: _updateCita,
            getAgenda: _getAgenda,
            addCita: _addCita
        };
        return publicAPI;
        function _setAgenda(pAgenda) {
            return $http.post('http://localhost:3000/api/save_agenda', pAgenda);
        }

        function _getAgendas(pDoctor) {
            return $http.get('http://localhost:3000/api/get_doctor_agenda', pDoctor);
        }

        function _updateCita(pCitaModified) {
            return $http.put('http://localhost:3000/api/update_cita', pCitaModified);
        }
        function _addCita(pAgenda) {
            return $http.put('http://localhost:3000/api/add_cita', pAgenda);
        }
        function _getAgenda(pAgenda) {
            console.log(pAgenda);
            console.log('pAgenda');
            return $http.post('http://localhost:3000/api/get_agenda',pAgenda);
        }
    }
}
)();
