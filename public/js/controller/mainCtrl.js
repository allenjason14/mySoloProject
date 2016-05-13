angular.module('wattReads').controller('mainCtrl', function($scope, $state){

  $scope.chooseArr = [];
  $scope.saveArr = [];
  $scope.tabs = [];

  $scope.addTab=function(){
    $scope.tabs.push({
      title:"",
      body:""
    });
  };

  $scope.clearTab=function(){
    $scope.tabs = [];
    };

  $scope.selectName = function(num) {
    $scope.chooseArr = [];
    $state.go('wikipage');
    $scope.chooseArr.push($scope.saveArr[num]);
    console.log($scope.saveArr[num]);
    console.log($scope.chooseArr[0].body);
  }


  $scope.saveData = function(infoName, title, text){
    var named = {
      name: infoName,
      body: {
        title: title,
        text: text
      }
    }
      console.log(named);
      $scope.saveArr.push(named);
  }
  //
  //   $scope.blankArr.push(named);
  //   $scope.infoName = '';
  //   $scope.hello = '';
  //   $scope.yo = '';
  //   $scope.hey = '';
  //   $scope.whassup = '';
  //   $scope.peace = '';
});
