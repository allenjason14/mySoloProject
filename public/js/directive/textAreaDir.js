angular.module("wattReads").directive("textAreaDir", function() {
  return {
    restrict: "E",
    templateUrl: "./js/directive/textAreaTem.html",
    controller: "textAreaCtrl",
    scope: {
      body: '=',
      index: '='
    }
  };
});
