'use strict';

angular.module('picnib', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/events', {
        templateUrl: 'views/event/list.html',
        controller: 'EventCtrl'
      })
      .when('/events/new', {
        templateUrl: 'views/event/new.html',
        controller: 'EventCtrl'
      })
      .otherwise({
        redirectTo: '/events'
      });
  }]);
