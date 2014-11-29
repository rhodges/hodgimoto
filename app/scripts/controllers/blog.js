'use strict';

/**
 * @ngdoc function
 * @name hodgimotoApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the hodgimotoApp
 */
angular.module('hodgimotoApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
