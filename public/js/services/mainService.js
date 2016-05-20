angular.module('wattReads').service("mainService", function($http) {

  this.login = function(user) {
    console.log(user);
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.getUser = function() {
    return $http({
      method: "GET",
      url: '/me'
    }).then(function(response) {
      console.log(response);
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
    console.log("Here's my logout");
    return $http({
      method: 'GET',
      url: '/logout',
    }).then(function(response) {
      return response;
    });
  };

  this.removeFromStoryArray = function(storyId, userId){
        return $http({
            method: "PUT",
            url: "/removeStory/" + userId,
            data: {
                story: storyId
            }
        }).then(function(response){
            return response.data
        })
    }
});
