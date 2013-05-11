'use strict';

var API_PATH = 'http://localhost:3000/';

var app = angular.module('angularMeetupApp');

app.controller('MainCtrl', function($scope, $http) {
  $http.get(API_PATH + 'wines').success(function(data) {
    $scope.awesomeThings = data;
  });
});

app.controller('ViewIngredientCtrl', function($scope, $routeParams, $http) {
  var url = API_PATH + 'wines/' + $routeParams.id;
  $http.get(url).success(function(data) {
    $scope.item = data;
  });
});

/*
 * Band has albums
 * Band has members
 * */