angular.module("wattReads").controller("newPageCtrl", function($scope, storyService, mainService, user, $state){

  $scope.user = user.data;
  $scope.storyName = {
      user: $scope.user._id
    }
  // $scope.userId = $scope.user._id;

  $scope.chooseArr = [];
  $scope.saveArr = [];
  // $scope.tabs = [];
  $scope.toggleTab = false;

  $scope.storyData = {
    body:{}
  }

// $scope.readStory = function(){
//   mainService.getUser().then(function(response){
//     $scope.user = response;
//   })
// }

  // $scope.addTab = function(){
  //   $scope.tabs.push({
  //     title:"",
  //     body:""
  //   });
  // };
  //
  // $scope.clearTab = function(){
  //   $scope.tabs = [];
  //   };


  $scope.addStory = function(){
    console.log("this is what I'm sending from addStory " + $scope.storyName);
    storyService.addStory($scope.storyName).then(function(response){
      $scope.saveArr.push(response);
      console.log("this is the response I'm getting: " + response);
      $scope.storyId = response._id;
    })
    $scope.toggleTab = true;
    console.log($scope.toggleTab);

  }

  $scope.saveSections = function(){
    console.log("This is my attempt to update " + $scope.storyData);
    storyService.saveSections($scope.storyData, $scope.storyId).then(function(response){
      // $scope.saveArr.push(response);
      console.log(response , " from saveSections function");
      $scope.updatedStory = response;
    })
  }
});
