angular.module("wattReads").controller("homeCtrl", function($scope, storyService, mainService, user, $state){

  $scope.user = user.data;
})
