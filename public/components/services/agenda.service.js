(function () {
    angular
        .module('Sonriplan')
        .service('agendaService', agendaService);
    agendaService.$inject = ['$http'];
    function agendaService() {
        var agendas = [];
        var publicAPI = {
            setAgenda: _setAgenda,
            getAgendas: _getAgendas,
            updateAgenda: _updateAgenda
        };
        return publicAPI;

    }
}
)();
