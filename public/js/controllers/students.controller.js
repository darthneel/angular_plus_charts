var studentsApp = studentsApp || {};
console.log(studentsApp);
studentsApp.app = studentsApp.app || angular.module('studentsApp', ['angularCharts']);

var json = "{\"2015-03-12\":[{\"student_id\":48,\"name\":\"Eric Kramer\",\"completed\":false},{\"student_id\":47,\"name\":\"Adrian Lin\",\"completed\":false},{\"student_id\":45,\"name\":\"Nastassia Carmona\",\"completed\":false},{\"student_id\":44,\"name\":\"Joseph Biggica\",\"completed\":false},{\"student_id\":24,\"name\":\"Patricia Laws\",\"completed\":false},{\"student_id\":27,\"name\":\"Jill Ortenberg\",\"completed\":false},{\"student_id\":28,\"name\":\"Lisa Wells\",\"completed\":false},{\"student_id\":30,\"name\":\"Andrea Ortega-Williams\",\"completed\":false},{\"student_id\":32,\"name\":\"Crawford Forbes\",\"completed\":false},{\"student_id\":33,\"name\":\"Timoor Kurdi\",\"completed\":false},{\"student_id\":34,\"name\":\"Janine Rosen\",\"completed\":false},{\"student_id\":35,\"name\":\"Tess Shapiro\",\"completed\":false},{\"student_id\":36,\"name\":\"Jeffrey Campomanes\",\"completed\":false},{\"student_id\":37,\"name\":\"Brenda Dargan\",\"completed\":false},{\"student_id\":38,\"name\":\"Clayton Albachten\",\"completed\":false},{\"student_id\":41,\"name\":\"Conor Hastings\",\"completed\":false},{\"student_id\":42,\"name\":\"Yoshie Muranaka\",\"completed\":false},{\"student_id\":43,\"name\":\"Daniel Farber\",\"completed\":false},{\"student_id\":40,\"name\":\"Shotaro Kamegai\",\"completed\":false},{\"student_id\":25,\"name\":\"Alex Fong\",\"completed\":false},{\"student_id\":26,\"name\":\"Iris Martinez\",\"completed\":false},{\"student_id\":31,\"name\":\"Heidi Williams-Foy\",\"completed\":false},{\"student_id\":39,\"name\":\"Tejal Patel\",\"completed\":false},{\"student_id\":49,\"name\":\"Neel Patel\",\"completed\":false}]}"

var hwData = JSON.parse(json);

studentsApp.app.controller('StudentsController', ['$scope', '$http', function($scope, $http) {
  // var req = {
  //   method: 'GET',
  //   url: 'http://localhost:8080/hubot/hwdata'
  // };


  // $http(req).
  //   success(function(data, status, headers, config) {
  //     console.log(data);
  //   }).
  //   error(function(data, status, headers, config) {
  //     console.log(data);
  //   });

  $scope.hwData = hwData;
  console.log($scope.hwData);


}]);