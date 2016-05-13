angular.module('wattReads').controller('loginCtrl', function($scope, mainService, $state) {
  $scope.login = function(){
    console.log("working");
    mainService.login($scope.credentials).then(function(response) {
      console.log(response.data);
      $state.go('wikipage');
    });
  };
  $scope.register = function(){
    mainService.register($scope.newUser).then(function(response){
      console.log(response.data);
    });
  };
});
