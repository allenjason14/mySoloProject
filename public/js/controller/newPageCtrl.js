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
    user: $scope.user._id,
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
    console.log("this is what I'm sending from addStory " + $scope.storyData);
    storyService.addStory($scope.storyData).then(function(response){
      $scope.saveArr.push(response);
      console.log("this is the response I'm getting: " + response);
      $scope.storyId = response;
    })
    $scope.toggleTab = true;
    console.log($scope.toggleTab);

  }

  $scope.saveSections = function(){
    console.log("This is my attempt to update " + storyData);
    storyService.saveSections(storyData).then(function(response){
      $scope.saveArr.push(response);
      console.log(response + " from saveSections function");
    })
  }
});
