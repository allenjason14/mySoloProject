angular.module("wattReads").controller('profileCtrl', function($scope, user, mainService, $state) {
  $scope.user = user;

  $scope.logout = function () {
    mainService.logout().then(function(response){
    });
  };
});
