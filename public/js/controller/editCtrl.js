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

})
