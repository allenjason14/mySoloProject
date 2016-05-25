angular.module("wattReads").controller("textAreaCtrl", function($scope) {
  console.log($scope.body);

  setTimeout(function(){
    var simplemde = new SimpleMDE({ element: document.getElementById('body_'+$scope.index)});
    if($scope.body){
    simplemde.value($scope.body.text);
  }
    simplemde.codemirror.on("change", function(){
    $scope.body.text = simplemde.value();
    });
  }, 500);

});
