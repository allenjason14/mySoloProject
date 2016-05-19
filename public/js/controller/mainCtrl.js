 angular.module('wattReads').controller('mainCtrl', function($scope, $state, mainService){

  $scope.chooseArr = [];
  $scope.saveArr = [];

  $scope.selectName = function(num) {
    $scope.chooseArr = [];
    $state.go('wikipage');
    $scope.chooseArr.push($scope.story[num]);
    console.log($scope.story[num]);
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
