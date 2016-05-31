angular.module("wattReads").controller("menuCtrl", function($scope){




$scope.bob =[
  {
    name: "bob",
    body: {
      name:"tom",
      body:{}
    }
  },
  {
    name:"bob1",
    body: {}
  },
  {
    name: "tim",
    body: {
      name: "Chris",
      body:{}
    }
  },
  {
    name: "tim1",
    body: {}
  },
  {
    name:"tim2",
    body:{}
  }
]

$scope.list = [$scope.tim, $scope.bob];

});
