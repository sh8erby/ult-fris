angular.module ('project')	   
	   .config(function($routeProvider)  
			{
	       $routeProvider
              .when('/messages', {templateUrl: 'views/messages.html', controller: 'MessagesCtrl'})
              .when('/roster', { templateUrl: 'views/roster.html', controller: 'RosterCtrl' })
              .when('/create', { templateUrl: 'views/create.html', controller: 'CreateCtrl' })
              .when('/queue', {templateUrl: 'views/queue.html', controller: 'QueueCtrl'})
              .when('/edit', { templateUrl: 'views/edit.html' })
    	      .otherwise({ redirectTo  :'/messages'});
			});