angular.module('wattReads', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider){

      $urlRouterProvider.otherwise('/login');

      $stateProvider
      //   .state("home", {
      //     url: '/',
      //     templateUrl: "routes/homeTem.html",
      //     controller: "homeCtrl"
      //   })
        .state("newpage", {
          url: "/new",
          templateUrl: "routes/newPageTem.html",
          controller: "newPageCtrl",
          resolve: {
            user: function(mainService) {
              return mainService.getUser();
            }
        }
      })
          .state("login", {
            url: "/login",
            templateUrl: "routes/loginTem.html",
            controller: "loginCtrl"
          })

          .state("wikipage", {
            url: "/wikipage/:id",
            templateUrl: "routes/wikiPageTem.html",
            resolve: {
              user: function(mainService) {
                return mainService.getUser();
              }
            },
            controller: "wikiPageCtrl"
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
