angular.module('wattReads').service("mainService", function($http) {
  this.login = function(user) {
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function(response) {
      return response
    });
  };

  this.gesture = function() {
    return $http({
      method: "GET",
      url: '/me'
    }).then(function(response) {
      return response;
    });
  };

  this.register = function(user) {
    return $http({
      method: 'POST',
      url: '/users',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.logout = function() {
    return $http({
      method: 'GET',
      url: '/logout',
    }).then(function(response) {
      return response;
    });
  };
});
