'use strict';

/**
 * @ngdoc function
 * @name hodgimotoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hodgimotoApp
 */
angular.module('hodgimotoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
