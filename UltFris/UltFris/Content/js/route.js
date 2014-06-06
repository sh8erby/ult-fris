angular.module('myapp')
       .config(function($routeProvider)
       {
           $routeProvider
                    .when('/roster', {templateUrl: 'partials/rosterpage.html', controller:'hello'});

       });