angular.module("wattReads").controller("wikiPageCtrl", function($scope, mainService, user, storyService){

  $scope.user = user.data;

  $scope.readStory = function(){
      storyService.readStory().then(function(response){
          $scope.story = response;
      })
  };

  // $scope.readStory();

});
