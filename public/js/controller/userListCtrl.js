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

  $scope.hello = function(){
    $scope.user.data.choice = "hello";
    console.log("funtion hello is getting throuigh")
  }

  $scope.goodbye = function(){
    $scope.user.data.choice = "";
    console.log("funtion goodbye is getting throuigh")
  }

  // $scope.setChoice = function(num){
  //   $scope.user.data.choice = "";
  //   $scope.user.data.choice =  $scope.story.story._id(num)
  // }

  // this.setChoice = function(){
  //   console.log("hit from storyService setName/(chooseArr)"
  //   return $http({
  //     method: "PUT",
  //     URL: "/setChoice",
  //     data: user.data.choice;
  //   }).then(function(response){
  //     return response.data
  //   })
  // }

  // $scope.setChoice = function(){
  //   user.data.choice = "hello"
  // }

});
