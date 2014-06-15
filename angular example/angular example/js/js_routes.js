angular.module ('project')	   
	   .config(function($routeProvider)  
			{
	       $routeProvider
              .when('/messages', {templateUrl: 'views/_views_messages.html', controller: 'MessagesCtrl'})
      	      //.when('/requestUrls', {templateUrl :'views/_views_requestUrls.html', controller: 'RequestUrlsCtrl'})
		      //.when('/debug', { templateUrl: 'views/views_debug.html', controller: 'DebugCtrl' })
              .when('/roster', { templateUrl: 'views/roster.html', controller: 'RosterCtrl' })
              .when('/create', { templateUrl: 'views/create.html', controller: 'CreateCtrl' })
              .when('/queue', {templateUrl: 'views/queue.html', controller: 'QueueCtrl'})
              .when('/edit', { templateUrl: 'views/edit.html' })
              .when('/hello', {templateUrl: 'views/hello.html'})
    	      .otherwise({ redirectTo  :'/messages'});
			});