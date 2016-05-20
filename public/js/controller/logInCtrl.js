angular.module('wattReads').controller('loginCtrl', function($scope, mainService, $state) {
  $scope.login = function(){
    console.log("working");
    mainService.login($scope.credentials).then(function(response) {
      console.log(response.data);
      $state.go('home');
    });
  };
  $scope.register = function(){
    mainService.register($scope.newUser).then(function(response){
      console.log(response.data);
    });
  };
  $scope.logout = function () {
    console.log("Ctrl logout working");
    mainService.logout().then(function(response){
      $state.go('login');
      console.log(response);
    });
  };
});
