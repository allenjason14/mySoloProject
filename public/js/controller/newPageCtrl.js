angular.module("wattReads").controller("newPageCtrl", function($scope, storyService, mainService, user, $state){

  $scope.user = user.data;

  $scope.chooseArr = [];
  $scope.saveArr = [];
  $scope.tabs = [];

  $scope.storyData = {
    user: $scope.user._id,
    body:{}
}

$scope.readStory = function(){
  mainService.getUser($scope.user._id).then(function(response){
    $scope.user = response;
  })
}

  $scope.addTab = function(){
    $scope.tabs.push({
      title:"",
      body:""
    });
  };

  $scope.clearTab = function(){
    $scope.tabs = [];
    };

  $scope.selectName = function(num) {
    $scope.chooseArr = [];
    $state.go('wikipage');
    $scope.chooseArr.push($scope.saveArr[num]);
    console.log($scope.saveArr[num]);
    console.log($scope.chooseArr[0].body);
  }

  $scope.addStory = function(){
    console.log("this is what I'm sending from addStory " + $scope.storyData);
    storyService.addStory($scope.storyData).then(function(response){
      $scope.saveArr.push(response);
      console.log("this is the response I'm getting: " + response);
    })
  }

  $scope.saveSections = function(story){
    console.log("This is my attempt to update " + story);
    storyService.saveSections(story).then(function(response){
      $scope.saveArr.push(response);
      console.log(response + " from saveSections function");
    })
  }
});
