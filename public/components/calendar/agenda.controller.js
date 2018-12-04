(function () {
  'use strict'
  angular
    .module('Sonriplan')
    .controller('agendaController', agendaController);
  agendaController.$inject = ['$http', '$scope', 'doctorService', 'pacienteService', 'agendaService'];

  function agendaController($http, $scope, doctorService, pacienteService, agendaService) {

    var vm = this;
    vm.agenda = {};
    vm.agenda.day = new Date();
    vm.doctor = {};
    vm.paciente = {};
    vm.doctores = "";
    vm.pacientes = "";
    vm.cita = {};
    vm.citas = [];
    loadDoctores();
    loadPacientes();
    loadAgenda();
    vm.loadAgenda = loadAgenda;
    vm.addCita = addCita;
    function addCita() {
      if (vm.agenda._id) {
        let newCita = {
          _id: vm.agenda._id,
          hora: vm.cita.hora,
          paciente: vm.cita.paciente
        }
        if (newCita.hora!=undefined&&newCita.hora!=""&&newCita.paciente!=undefined&&newCita.paciente!="") {
          agendaService.addCita(newCita).then(function (response) {
            loadAgenda();
          })
        }

      }

    }
    function setCitas(horario) {
      var p = [];
      for (let c = horario.inicio; c <= horario.fin; c++) {
        for (let m = 0; m < 60; m += 15) {
          var cita = {};
          var time = "am"
          var hora = c
          if (c > 12) {
            hora = c - 12;
            time = "pm"
          } else if (c == 12) {
            time = "pm"
          } else { hora = c; time = "am" }
          var data = {
            m: m, time, hora, m2: m + 15, time2: time, hora2: hora
          };
          if (m == 45) {
            data.m2 = '00'
            data.hora2 = data.hora2 + 1
            if (hora == 12) {
              data.hora2 = 1;
            }
          } else if (m < 9) {
            data.m = '0' + data.m;
          }
          if (data.hora2 < 10) {
            data.hora2 = '0' + data.hora2;
          }
          if (data.hora < 10) {
            data.hora = '0' + data.hora;
          }
          cita.hora = `${data.hora}:${data.m} ${data.time} - ${data.hora2}:${data.m2} ${data.time2}`;
          cita.paciente = "";
          p.push(cita)
        }
      }
      return p;
    };
    function loadCitas(scope) {
      var citas = [];
      var obj = {};
      if (!scope.agenda.citas) {
        var horario = {
          inicio: 8,
          fin: 12
        }
        scope.agenda.citas = setCitas(horario);
      }
      for (let i = 0; i < scope.agenda.citas.length; i++) {
        obj[scope.agenda.citas[i].hora] += ',' + scope.agenda.citas[i].paciente;
      }
      var key = Object.keys(obj)
      for (let j = 0; j < key.length; j++) {
        citas[j] = { hora: key[j], pacientes: obj[key[j]].split(',') }
        citas[j].pacientes.shift();
        for (let k = citas[j].pacientes.length; k < 6; k++) {
          citas[j].pacientes.push(" ");
        }
      }
      scope.citas = citas;

    }
    function loadDoctores() {
      doctorService.getDoctores().then(function (response) {
        vm.doctores = response.data;
      })
    }
    function loadPacientes() {
      pacienteService.getPacientes().then(function (response) {
        vm.pacientes = response.data;
      })
    }
    function loadAgenda() {
      var pAgenda = {
        doctor: vm.agenda.doctor,
        day: vm.agenda.day.toDateString(),
        citas: setCitas({ inicio: 8, fin: 14 })
      }
      if (pAgenda.doctor != "" && pAgenda.doctor != undefined && pAgenda.day != "" && pAgenda.day != undefined) {
        agendaService.getAgenda(pAgenda).then(function (response) {
          if (response.data.length == 0) {
            agendaService.setAgenda(pAgenda).then(function (rs) {
              agendaService.getAgenda(pAgenda).then(function (respons) {
                vm.agenda = respons.data[0];
                vm.agenda.day = new Date(vm.agenda.day);
                loadCitas(vm);
              })
            });

          } else {
            vm.agenda = response.data[0];
            vm.agenda.day = new Date(vm.agenda.day);
            loadCitas(vm);
          }

        });
      } else {
        loadCitas(vm);
      }

    }
    function clean() {
      vm.agenda = {}
    }
  }
})();
