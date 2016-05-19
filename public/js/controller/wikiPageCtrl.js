angular.module("wattReads").controller("wikiPageCtrl", function($scope, mainService, user, storyService, $stateParams){

  $scope.user = user.data;
  $scope.id = $stateParams.id;

  $scope.readStory = function(){
      console.log("This is my $scope.id: " + $scope.id);
      console.log("It gets this far");
      storyService.readStory($scope.id).then(function(response){
          console.log("This is the return from wikiPageCtrl readStory");
          console.log(response);
          $scope.selStory = response;
      })
  };

  $scope.readStory();

});
