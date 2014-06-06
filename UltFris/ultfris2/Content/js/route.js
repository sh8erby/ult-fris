angular.module('myapp')
	   .config(function ($routeProvider)
	   {
	       $routeProvider
           .when('/roster', { templateUrl: 'partials/rosterpage.html', controller: 'RosterController' })
           .when('/create', { templateUrl: 'partials/create.html', controller: 'CreateController' })
           .otherwise({redirectTo: 'partials/hello.html'});
       });