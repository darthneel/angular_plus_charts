var studentsApp = studentsApp || {};
// console.log(studentsApp);
studentsApp.app = studentsApp.app || angular.module('studentsApp', ['angularCharts']);

studentsApp.app.controller('StudentsController', ['$scope', '$http', function($scope, $http) {

  $scope.chartType = "line";

  $scope.config = {
    "labels": false,
    "title": "Music Appreciation",
    "legend": {
      "display": true,
      "position": "right"
    },
    "innerRadius": 0,
    "lineLegend": "traditional"
  };

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

  $scope.data = {
    series: ['Maroon 5', 'Taylor Swift', 'Biggie'],
    data:[
      {
        x:"Neel", 
        y:[8, 3, 10]
      },
      {
        x:"Fritzy",
        y:[10, 2, 6]
      },
      {
        x:"Jeff",
        y:[5, 9, 3]
      }
    ]
  };
  console.log($scope.data);


}]);