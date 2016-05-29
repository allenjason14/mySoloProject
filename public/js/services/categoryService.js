angular.module("wattReads").service("categoryService", function($http){

//creates a new page

  this.addCategory = function(catName){
    return $http({
      method: 'POST',
      url: "/newCat",
      data: catName
    }).then(function(response){
      console.log(response.data);
      return response.data
    })
  })

  this.readUserCategory = function(user){
    return $http({
      method: "GET",
      url: "/cat/" + user._id,
    }).then(function(resonse){
      return response.data
    })
  }

  this.readCategory = function(catID){
    returh $http({
      method: "GET",
      url: /readCat/ + catID
    }).then(function(response){
      return response.data;
    })
  }


// //saves new sections of a page
//   this.saveSections = function(storyData, storyId){
//     return $http({
//       method: "PUT",
//       url: "/updateStory/" + storyId,
//       data: storyData.body
//     }).then (function(response){
//       return response.data
//     })
//   };
//
//   this.updateTab = function(tabData, tabID){
//     return $http({
//       method: "PUT",
//       url: "/updateTab/" + tabId,
//       data: tabData.body
//     }).then (function(response){
//       return response.data
//     })
//   }
//
//   this.updateTab = function(tabData, tabId){
//     return $http({
//       method: "PUT",
//       url: "/updateTab/" + tabId,
//       data: tabData
//     }).then (function(response){
//       return response.data
//     })
//   }
//
//
//   this.removePage = function(storyId){
//     return $http({
//       method: "DELETE",
//       url: "/deleteStory/" + storyId
//     }).then(function(response){
//       console.log("The page is deleted");
//     })
//   }
// });
