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

    function init(){
      vm.doctor = {};
    }init();


    vm.save = function(pNewDoctor) {
      doctorService.setDoctor(pNewDoctor);
      console.log(pNewDoctor);
      init();
      clean();
      window.location.reload();
    }

    vm.getInfo = function(pDoctor) {
      vm.doctor._id = pDoctor._id;
      vm.doctor.name = pDoctor.name;
      vm.doctor.special = pDoctor.special;
      vm.doctor.time = pDoctor.time;
      vm.doctor.locate = pDoctor.locate;
      vm.doctor.avalible = pDoctor.avalible;
      $("#Edit").modal();
      vm.showFomrEdit = true;
    }

    vm.getInfo2 = function(pDoctor) {
      vm.doctor._id = pDoctor._id;
      vm.doctor.name = pDoctor.name;
      vm.doctor.special = pDoctor.special;
      vm.doctor.time = pDoctor.time;
      vm.doctor.locate = pDoctor.locate;
      vm.doctor.avalible = pDoctor.avalible;
      $("#Erase").modal();
      vm.showFomrEdit = true;
    }

    vm.update = function() {
      var doctorEdited = {
      _id: vm.doctor._id,
      avalible:  vm.doctor.avalible,
      name:  vm.doctor.name,
      special:  vm.doctor.special,
      time:  vm.doctor.time,
      locate:  vm.doctor.locate
      }
      doctorService.updateDoctor(doctorEdited).then(function(response) {
        loadDoctores();
        vm.avalible = null;
        vm.name = null;
        vm.special = null;
        vm.time = null;
        vm.locate = null;
      });

      vm.showFomrEdit = false;
      init();
    }

    vm.delete = function() {
      var doctorDelete = {
      _id: vm.doctor._id,
      avalible:  vm.doctor.avalible,
      name:  vm.doctor.name,
      special:  vm.doctor.special,
      time:  vm.doctor.time,
      locate:  vm.doctor.locate
      }
      doctorService.deleteDoctor(doctorDelete).then(function(response) {
        loadDoctores();
        vm.avalible = null;
        vm.name = null;
        vm.special = null;
        vm.time = null;
        vm.locate = null;
      });

      vm.showFomrEdit = false;
      init();
    }

    function clean() {
      vm.doctor = {}
    }
  }
})();
