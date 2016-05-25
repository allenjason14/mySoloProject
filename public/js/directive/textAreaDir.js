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

}).directive("mark", function() {
  return {
    restrict: "E",
    template: '<div marked="story"></div>',
    scope: {
      story: '='
    }
  };

});
