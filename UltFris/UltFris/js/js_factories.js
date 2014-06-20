angular.module('project')
		.factory('fbDebugMsg', function($firebase, fbURL, fbAuthToken) 
			{ 	
				var firebase = new Firebase(fbURL  + "/players");					
				firebase.auth(fbAuthToken);					
		   		return firebase;
		})
        .factory('fbaDebugMsg', function ($firebase, fbDebugMsg) {
            return $firebase(fbDebugMsg);
        })

	    .factory('fbRequestUrl', function($firebase, fbURL, fbAuthToken) 
			{ 	
	    		var firebase = new Firebase(fbURL  + "/requestUrl");					
				firebase.auth(fbAuthToken);					
		   		return firebase;
			})

        .factory('fbRoster', function ($firebase, fbURL, fbAuthToken) {
	        var firebase = new Firebase(fbURL + "/players");
	        firebase.auth(fbAuthToken);
	        return firebase;
        })
        .factory('fbaRoster', function ($firebase, fbRoster) {
            return $firebase(fbRoster);
        })

         .factory('fbQueue', function ($firebase, fbURL, fbAuthToken) {
             var firebase = new Firebase(fbURL + "/queue");
             firebase.auth(fbAuthToken);
             return firebase;
         })
        .factory('fbaQueue', function ($firebase, fbQueue) {
            return $firebase(fbQueue);
        })        
;
