"use strict";angular.module("hodgimotoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl"}).when("/demos",{templateUrl:"views/demos.html",controller:"DemosCtrl"}).when("/works",{templateUrl:"views/works.html",controller:"WorksCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("hodgimotoApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("hodgimotoApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("hodgimotoApp").controller("BlogCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("hodgimotoApp").controller("DemosCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("hodgimotoApp").controller("WorksCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("hodgimotoApp").controller("HeaderCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]);