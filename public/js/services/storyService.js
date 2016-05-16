angular.module("wattReads").service("storyService", function($http){

  this.addStory = function(story){
    return $http({
      method:'POST',
      url: "/newStory",
      data: {name: story}
    }).then(function(response){
      console.log(response.data);
      return response.data
    })
  }

  this.readStory = function(story){
    return $http({
      method:'GET',
      URL: "/readStory"
    }).then(function(response){
      return response.data
    })
  }
});
