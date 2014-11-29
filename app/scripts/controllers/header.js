'use strict';

/**
 * @ngdoc function
 * @name hodgimotoApp.controller:DemosCtrl
 * @description
 * # DemosCtrl
 * Controller of the hodgimotoApp
 */
angular.module('hodgimotoApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  });
