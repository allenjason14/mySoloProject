angular.module("wattReads").controller("homeCtrl", function($scope, storyService, mainService, user, $state){

  $scope.user = user.data;

  $scope.readUserStory = function(){
    storyService.readUserStory($scope.user).then(function(response){
      console.log("hit from userList readUserStory");
      $scope.story = response;
    })
  };

  $scope.readUserStory();

  // $scope.readStory = function(){
  //     console.log("This is my $scope.id: " + $scope.id);
  //     console.log("It gets this far");
  //     storyService.readStory($scope.id).then(function(response){
  //         console.log("This is the return from wikiPageCtrl readStory");
  //         console.log(response);
  //         $scope.selStory = response;
  //     })
  // };
  //
  // $scope.readStory();

})
