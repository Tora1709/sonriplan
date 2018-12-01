(function () {
  'use strict'
  angular
    .module('Sonriplan')
    .controller('agendaController', agendaController);
  agendaController.$inject = ['$http', '$scope', 'doctorService', 'pacienteService', 'agendaService'];

  function agendaController($http, $scope, doctorService, pacienteService, agendaService) {

    var vm = this;
    loadDoctores();
    vm.doctor = {};
    vm.doctores = "";
    loadPacientes();
    vm.paciente = {};
    vm.pacientes = "";
    loadAgenda();
    console.log(vm.agenda);
    console.log('vm.agenda');
    // vm.agenda = {};
    function loadCitas(scope){
      var citas=[];
      var obj={};
      
      for (let i = 0; i < scope.agenda.citas.length; i++) {
        obj[scope.agenda.citas[i].hora]+=','+scope.agenda.citas[i].paciente;
      }
      var key =Object.keys(obj)
      for (let j = 0; j < key.length; j++) {
        citas[j]={hora:key[j],pacientes:obj[key[j]].split(',')}
        citas[j].pacientes.shift();
        for (let k = citas[j].pacientes.length; k <5 ; k++) {
          citas[j].pacientes.push(" ");
        }
      }
      scope.citas=citas;
    }
    function loadDoctores() {
      doctorService.getDoctores().then(function (response) {
        vm.doctores = response.data;
      })
      console.log(vm.doctores)
      console.log('vm.doctores')
    }
    function loadPacientes() {
      pacienteService.getPacientes().then(function (response) {
        vm.pacientes = response.data;
      })
    }
    function loadAgenda() {
      vm.agenda = {
        'doctor': vm.doctor._id
      };
      // vm.agenda.day="julio";
      // vm.agenda.doctor="5bf9bd424e18cf35d8e917ff";
      
      var pAgenda = {
        doctor: vm.agenda.doctor,
        day: vm.agenda.day,
        citas: [
          {
            hora: "8:00 am-8:15 am",
            paciente:"julio"
          },
          {
            hora: "8:00 am-8:15 am",
            paciente:"miguel"
          },
          {
            hora: "8:15 am-8:30 am",
            paciente:"Armando"
          },
          {
            hora: "8:30 am-8:45 am",
            paciente:"rodrigo"
          }
        ]
      }
      agendaService.getAgenda(pAgenda).then(function (response) {
        console.log(response);
        if (response.data.length==0) {
         
         // console(pAgenda.citas[1]);
          agendaService.setAgenda(pAgenda);
        } else {
          vm.agenda = response.data[0];
          loadCitas(vm);
        }
      });
    }
    function clean() {
      vm.agenda = {}
    }
  }
})();
