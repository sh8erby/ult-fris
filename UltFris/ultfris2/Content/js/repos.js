angular.module('myapp')
    .factory('fbaRoster', function($firebase, fbURL, fbAuthToken)
    {
        var ref = new Firebase(fbURL + "/players");
        ref.auth(fbAuthToken);
        return ref;
    })