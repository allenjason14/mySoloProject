angular.module('wattReads').controller('userListCtrl', function(storyService, mainService, $scope, $state){

  $scope.getUser = function(){
    mainService.getUser().then(function(response){
       console.log("This is a test. Is it working?")
      console.log(response);
      $scope.user = response;
    })
  }

  $scope.getUser();

  $scope.readStory = function(){
    storyService.readStory();
  }
});
