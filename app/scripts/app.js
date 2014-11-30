'use strict';

/**
 * @ngdoc overview
 * @name hodgimotoApp
 * @description
 * # hodgimotoApp
 *
 * Main module of the application.
 */
angular
  .module('hodgimotoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/demos', {
        templateUrl: 'views/demos.html',
        controller: 'DemosCtrl'
      })
      .when('/works', {
        templateUrl: 'views/works.html',
        controller: 'WorksCtrl'
      })
      .when('/demos/mars', {
        templateUrl: 'views/demos/mars.html',
        controller: 'DemosMarsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
