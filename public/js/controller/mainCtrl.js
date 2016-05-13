angular.module('wattReads').controller('mainCtrl', function($scope, $state){

  $scope.storiesArr = [];
  $scope.blankArr = [];

  $scope.selectName = function(num) {
    $scope.storiesArr = [];
    $state.go('wikipage');
    $scope.storiesArr.push($scope.blankArr[num]);
  }


  $scope.saveData = function(infoName, historyname, history, skillsname, skills, notesname, notes, developmentname, development){
    var named = {
      name: infoName,
      body: {
        historyname:historyname,
        history:history,
        skillsname:skillsname,
        skills:skills,
        notesname:notesname,
        notes:notes,
        developmentname:developmentname,
        development:development,
      }
    }
  $scope.blankArr.push(named);
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
