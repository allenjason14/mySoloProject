angular.module('wattReads').controller('headerCtrl2', function($scope, mainService, $state){
    $scope.toggleVisible = true;

    $scope.toggleMenu = function() {
      $scope.toggleVisible = !$scope.toggleVisible;
    }

    $scope.getUser = function(){
      mainService.getUser().then(function(response){
         console.log("hit from userList getUser")
        $scope.user = response;
      })
    }

    $scope.getUser();

    $scope.logout = function () {
      console.log("Ctrl logout working");
      mainService.logout().then(function(response){
        $state.go('login');
        console.log(response);
        $scope.toggleVisible = true;
      });
    };
});
