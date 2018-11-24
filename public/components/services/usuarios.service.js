(function() {
  'use strict'
  angular

    .module('Sonriplan')
    .service('userService', userService);
    userService.$inject=['$http'];


    function userService($http) {

      var user = [];

      var publicAPI = {
        setUser: _setUser,
        getUsers: _getUsers,
        updateUser: _updateUser
      };
      return publicAPI;

      function _setUser(pUser) {
        console.log(pUser);
        return $http.post('http://localhost:3000/api/save_user',pUser);
      }

      function _getUsers() {
        return $http.get('http://localhost:3000/api/get_all_user');
      }

      function _updateUser(pUserModified) {
        return $http.put('http://localhost:3000/api/update_sucursal',pUserModified);
      }


      var user = null;

      for (var i = 0; i < usersList.length; i++) {
        if ( usersList[i].id == uniqueId) {
            user = usersList[i];
            return user ;
        }
      }



    }
})();
