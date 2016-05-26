angular.module("wattReads").controller("textAreaCtrl", function($scope) {
  console.log($scope.body);

  if(!$scope.index){
    $scope.index = 0;
  }

  setTimeout(function(){
    $scope.simplemde = new SimpleMDE({ element: document.getElementById($scope.index)});

    if($scope.body){
      $scope.simplemde.value($scope.body.text);
  }

}, 100);

  $scope.save = function() {
    $scope.body.text = $scope.simplemde.value();
    console.log("this is from save " , $scope.body.text);
  }

});
