angular.module ('project' )
	   .directive('topMenu', function()			   
		    {
		   	return {
		   			restrict: 'A',
		   			templateUrl: 'directives/directives_topMenu.html'
		   	       };
		    });
