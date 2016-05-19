angular.module("wattReads").service("storyService", function($http){

  this.addStory = function(storyData){
    return $http({
      method:'POST',
      url: "/newStory",
      data: storyData
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

  this.saveSections = function(story){
    return $http({
      method: "PUT",
      url: "/updateStory/" + story._id,
      data: storyData,
      body:{
        title: story.title,
        text: story.text
      }
    }).then (function(response){
      return response.data
    })
  };

  this.readStory = function(){
    return $http({
      method:'GET',
      URL: "/readStory"
    }).then(function(response){
      return response.data
    })
  }

// this.setChoice = function(){
//   console.log("hit from storyService setName/(chooseArr)"
//   return $http({
//     method: "PUT",
//     URL: "/setChoice",
//     data: chooseArr;
//   }).then(function(response){
//     return response.data
//   })
// }

});
