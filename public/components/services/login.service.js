(function() {
    'use strict'
    angular
        .module('Sonriplan')
        .service('userService', userService);
        userService.$inject = ['$http'];

    function userService($http) {
        var User = [];

        var publicAPI = {
            setUser: _setUser,
            getUser: _getUser
        };
        return publicAPI;

        function _setUser(pUser) {
            console.log(pUser);
            return $http.post('http://localhost:3000/api/save_user', pUser);
        }

        function _getUser() {
            return $http.get('http://localhost:3000/api/get_all_user');
        }
    }
})();