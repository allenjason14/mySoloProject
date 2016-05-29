angular.module("wattReads").service("storyService", function($http){

//creates a new page
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

//gets all pages made by the user.
  this.readUserStory = function(user){
      return $http({
        method:"GET",
        url: "/readStory/" + user._id,
      }).then(function(response){
        return response.data
      })
  }

//saves new sections of a page
  this.saveSections = function(storyData, storyId){
    return $http({
      method: "PUT",
      url: "/updateStory/" + storyId,
      data: storyData.body
    }).then (function(response){
      return response.data
    })
  };

  // this.updateTab = function(tabData, tabID){
  //   return $http({
  //     method: "PUT",
  //     url: "/updateTab/" + tabId,
  //     data: tabData.body
  //   }).then (function(response){
  //     return response.data
  //   })
  // }

  this.updateTab = function(tabData, tabId){
    return $http({
      method: "PUT",
      url: "/updateTab/" + tabId,
      data: tabData
    }).then (function(response){
      return response.data
    })
  }

//gets a selected page
  this.readStory = function(storyId){
    console.log("And this far");
    return $http({
      method:'GET',
      url: "/readSelStory/" + storyId
    }).then(function(response){
      console.log("Does it get this far?");
      return response.data
    })
  }

  this.removePage = function(storyId){
    return $http({
      method: "DELETE",
      url: "/deleteStory/" + storyId
    }).then(function(response){
      console.log("The page is deleted");
    })
  }
});
