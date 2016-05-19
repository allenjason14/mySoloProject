angular.module('wattReads').controller('userListCtrl', function(storyService, mainService, $scope, $state){

  $scope.tabs = [];
  $scope.chooseArr = [];


  $scope.selectName = function(num) {
    $scope.chooseArr = [];
    $state.go('wikipage');
    $scope.chooseArr.push($scope.story[num]);
    console.log($scope.story[num]);
    console.log($scope.chooseArr[0].body);
  }

  $scope.getUser = function(){
    mainService.getUser().then(function(response){
       console.log("hit from userList getUser")
      $scope.user = response;
    })
  }

  $scope.getUser();

  $scope.readUserStory = function(){
    storyService.readUserStory($scope.user).then(function(response){
      console.log("hit from userList readUserStory");
      $scope.story = response;
    })
  };

  $scope.readUserStory();

});
