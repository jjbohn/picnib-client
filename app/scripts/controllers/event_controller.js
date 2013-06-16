'use strict';

function EventCtrl($scope) {
  $scope.events = [
    { name: 'Griswold Christmas', date: '12/25/2013', photos: [0], access_state: 'public', state: 'active' },
    { name: 'Coleman Wedding', date: '11/6/2013', photos: [0], access_state: 'public', state: 'active' },
    { name: 'Mary\'s Baby Photos', date: '9/4/2013', expiration_date: '06/25/2014', photos: [0], access_state: 'public', state: 'active' },
    { name: 'Oliver Bar Mitsfa', date: '5/9/2012', photos: [0], access_state: 'public', state: 'active' }
  ];

  $scope.test = function() {
    $scope.events.push({
      name: 'Bohn family christmas',
      date: 'Some time',
      photos: [],
      access_state: 'public',
      state: 'inactive'
    });
  };

  $scope.create = function() {
    console.log($scope)
    $scope.events.push(event);

  };
};
