angular.module("wattReads").service("storyService", function($http){

  this.addStory = function(story){
    return $http({
      method:'POST',
      url: "/newStory"
      data: story
    }).then(function(response){
      return response.data
    })
  })
});
