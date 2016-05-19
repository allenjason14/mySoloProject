angular.module("wattReads").service("storyService", function($http){

  this.addStory = function(storyName){
    return $http({
      method:'POST',
      url: "/newStory",
      data: storyName
    }).then(function(response){
      console.log(response.data);
      return response.data
    })
  }

  this.readUserStory = function(user){
      return $http({
        method:"GET",
        url: "/readStory/" + user._id,
      }).then(function(response){
        return response.data
      })
  }

  this.saveSections = function(){
    return $http({
      method: "PUT",
      url: "/updateStory/" + story._id,
      data: storyData,
      body:{
        title: storyData.body.title,
        text: storyData.body.text
      }
    }).then (function(response){
      return response.data
    })
  };

  this.readStory = function(storyID){
    console.log("And this far");
    return $http({
      method:'GET',
      url: "/readSelStory/" + storyID
    }).then(function(response){
      console.log("Does it get this far?");
      return response.data
    })
  }

});
