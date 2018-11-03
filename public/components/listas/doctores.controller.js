(function(){
  'use strict'
  angular
  .module('Sonriplan')
  .controller('doctorController', doctorController);
  doctorController.$inject = ['$http','$scope','doctorService'];

  function doctorController($http,$scope,doctorService){

    var vm = this;
    loadDoctores();
    vm.doctor = {};
    vm.doctores = "";

    function loadDoctores() {
      doctorService.getDoctores().then(function(response) {
        vm.doctores = response.data;
      })
    }



    vm.save = function(pNewDoctor) {
      doctorService.setDoctor(pNewDoctor);
      console.log(pNewDoctor);
      clean();
    }

    vm.getInfo = function(pDoctor) {
      wm.doctor._id = pDoctor._id;
      wm.doctor.name = pDoctor.name;
      wm.doctor.special = pDoctor.special;
      wm.doctor.time = pDoctor.time;
      wm.doctor.locate = pDoctor.locate;
      wm.doctor.avalible = pDoctor.avalible;
    }

    vm.update = function() {
      var doctorEdited = {
      _id: wm.doctor._id,
      avalible:  wm.doctor.avalible,
      name:  wm.doctor.name,
      special:  wm.doctor.special,
      time:  wm.doctor.time,
      locate:  wm.doctor.locate
      }
      doctorService.updateDoctor(doctorEdited).then(function(response) {
        loadDoctores();
        wm.avalible = null;
        vm.name = null;
        vm.special = null;
        wm.time = null;
        wm.locate = null;
      })
    }

    function clean() {
      vm.doctor = {}
    }
  }
})();
