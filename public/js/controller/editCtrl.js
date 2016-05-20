angular.module("wattReads").controller("editCtrl", function($scope, storyService, mainService, user, $state, $stateParams){

  $scope.user = user.data;
  $scope.id = $stateParams.id;

  $scope.readStory = function(){
    console.log("This is my $scope.id: " + $scope.id);
    console.log("EditCtrl here");
    storyService.readStory($scope.id).then(function(response){
        console.log("This is the return from editCtrl readStory");
        console.log(response);
        $scope.selStory = response;
    })
  };

  $scope.readStory();

  $scope.updateTab = function(){
    console.log("This is my attempt to update " + $scope.selStory);
    storyService.updateTab($scope.selStory, $scope.id).then(function(response){
      console.log(response , " from editCtrl saveSections");
      $scope.selStory = response;
    })
  };

  $scope.addTab = function(num){
    $scope.selStory.body.splice(num + 1, 0, {title: "New Tab", text: "new Body"});
    console.log("New tab added");
  }

  $scope.removeTab = function(num){
    $scope.selStory.body.splice(num, 1);
    console.log("splice is done");
  }
});
