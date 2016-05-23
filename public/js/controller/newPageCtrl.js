angular.module("wattReads").controller("newPageCtrl", function($scope, storyService, mainService, user, $state){

  $scope.user = user.data;
  $scope.storyName = {
      user: $scope.user._id
    }
  // $scope.userId = $scope.user._id;

  $scope.chooseArr = [];
  $scope.saveArr = [];
  $scope.toggleTab = false;
  $scope.toggleDisplay = false;

  $scope.storyData = {
    body:{}
  }


  $scope.addStory = function(){
    console.log($scope.storyName.name)
    if($scope.storyName.name !== undefined){
      console.log("this is what I'm sending from addStory " + $scope.storyName);
      storyService.addStory($scope.storyName).then(function(response){
      $scope.saveArr.push(response);
      console.log("this is the response I'm getting: " + response);
      $scope.storyId = response._id;
      $scope.storyRes = response;
    })
    $scope.toggleTab = true;
    console.log($scope.toggleTab);
}
  else {
  alert("Please Name Your Page");
}
  }

  $scope.saveSections = function(){
    console.log("This is my attempt to update " + $scope.storyData);
    storyService.saveSections($scope.storyData, $scope.storyId).then(function(response){
      console.log(response , " from saveSections function");
      $scope.updatedStory = response;
      $scope.storyData.body.text = "";
      $scope.storyData.body.title = "";
      $scope.toggleDisplay = true;

    })
  }
});
