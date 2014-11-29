'use strict';

/**
 * @ngdoc function
 * @name hodgimotoApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the hodgimotoApp
 */
angular.module('hodgimotoApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
