angular.module('wattReads', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state("home", {
          url: '/',
          templateUrl: "routes/homeTem.html",
          // controller: "homeCtrl"
        })
        .state("newpage", {
          url: "/new",
          templateUrl: "routes/newPageTem.html",
          // controller: "choicePageCtrl"
        })
          .state("login", {
            url: "/login",
            templateUrl: "routes/loginTem.html",
            controller: "loginCtrl"
          })
          .state("wikipage", {
            url: "/wikipage",
            templateUrl: "routes/wikiPageTem.html",
            // controller: "mainCtrl"
          })
          .state("profile", {
          templateUrl: "routes/profileTem.html",
          controller: 'profileCtrl',
          resolve: {
            user: function(mainService, $state) {
              return mainService.getUser().then(function(response){
                return response.data;
              }).catch(function(err) {
                $state.go('login')
              });
            }
          }
        });
    });
