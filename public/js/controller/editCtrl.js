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

  $scope.addAbove = function(){
    $scope.selStory.body.unshift({title: "New Tab", text: "new Body"})
  }

$scope.shiftUp = function(num){
  if (num > 0) {
    var temp = $scope.selStory.body[num];
    $scope.selStory.body[num] = $scope.selStory.body[num - 1];
    $scope.selStory.body[num - 1] = temp;
    console.log("shifted up");
  }
  else {
    console.log("cannot shift up");
  }
}

$scope.shiftDown = function(num){
  if (num < $scope.selStory.body.length - 1) {
    var temp = $scope.selStory.body[num];
    $scope.selStory.body[num] = $scope.selStory.body[num + 1];
    $scope.selStory.body[num + 1] = temp;
    console.log( "shifted down");
  }
  else {
    console.log("cannot shift down");
  }
}

  $scope.removePage = function(){
    storyService.removePage($scope.id).then(function(response){
        console.log($scope.user);
        mainService.removeFromStoryArray($scope.id, $scope.user.data._id).then(function(response){
          $state.go("home")
      });
    });
  }

  // $(document).ready(function(){
  //   $('textarea').autoResize();
  // });
});
