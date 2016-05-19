angular.module("wattReads").controller("wikiPageCtrl", function($scope, mainService, user, storyService, $stateParams){

  $scope.user = user.data;
  $scope.id = $stateParams.id;

  $scope.readStory = function(){
      storyService.readStory().then(function(response){
          $scope.story = response;
      })
  };

  // $scope.readStory();

});
