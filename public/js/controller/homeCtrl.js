angular.module("wattReads").controller("homeCtrl", function($scope, storyService, mainService, user, $state){

  $scope.user = user.data;

  $scope.readUserStory = function(){
    storyService.readUserStory($scope.user).then(function(response){
      console.log("hit from userList readUserStory");
      $scope.story = response;
    })
  };

  $scope.readUserStory();

})
