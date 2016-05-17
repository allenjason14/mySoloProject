angular.module("wattReads").controller("newPageCtrl", function($scope, storyService, user, $state){

  $scope.user = user.data;

  $scope.chooseArr = [];
  $scope.saveArr = [];
  $scope.tabs = [];

  $scope.addTab = function(){
    $scope.tabs.push({
      title:"",
      body:""
    });
  };

  $scope.clearTab = function(){
    $scope.tabs = [];
    };

  $scope.selectName = function(num) {
    $scope.chooseArr = [];
    $state.go('wikipage');
    $scope.chooseArr.push($scope.saveArr[num]);
    console.log($scope.saveArr[num]);
    console.log($scope.chooseArr[0].body);
  }

  $scope.addStory = function(story){
    console.log("hello, this is your story: " + story);
    storyService.addStory(story).then(function(response){
        $scope.saveArr.push(response);
        console.log(response);
    })
  }

$scope.saveSections = function(story){
  console.log("This is my attempt to update " + story);
  storyService.saveSections(story).then(function(response){
    $scope.saveArr.push(response);
    console.log(response + " from saveSections function");
  })
}
  // $scope.saveData = function(infoName, title, text){
  //   var named = {
  //     name: infoName,
  //     body: {
  //       title: title,
  //       text: text
  //     }
  //   }
  //     console.log(named);
  //     $scope.saveArr.push(named);
  // }

});
