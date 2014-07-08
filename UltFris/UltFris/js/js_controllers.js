var project = angular.module ('project');

project.controller('MessagesCtrl', function($scope, fbaDebugMsg)
{ 
	$scope.messages = fbaDebugMsg;				
});

project.controller('DebugCtrl', function ($scope, fbDebugMsg, fbRequestUrl) {
    $scope.fbDebugMsg = fbDebugMsg;
    $scope.fbRequestUrl = fbRequestUrl;
});

//done
project.controller('CreateCtrl',function ($scope, fbaRoster){
    var thisplaya = fbaRoster;
    
    $scope.addPlayer = function ()
    {
        thisplaya.$add({
            PID: $scope.perFName +"_"+ $scope.perLName,
            name: $scope.perFName,
            throw: $scope.perThrow,
            catch: $scope.perCatch,
            height: $scope.perHeight,
            run: $scope.perRun,
            defense: $scope.perDefense
        })
  
            $scope.perFName = "";
            $scope.perLName = "";
            $scope.perThrow = "";
            $scope.perCatch = "";
            $scope.perRun = "";
            $scope.perHeight = "";
            $scope.perDefense = "";
    }
});

//fix edit, delete, when clicked make the card background different color
//also if active in the queue and clicked again, remove from queue (in the future)
project.controller('RosterCtrl', function ($scope,  fbaRoster, fbaQueue){
    $scope.players = fbaRoster;   
    $scope.que = fbaQueue;
    $scope.editPlayer = function (player) {
        //console.log(player);
        alert('soon');
    }
    $scope.deletePlayer = function () {
        alert('soon');
    }

    $scope.check = false;
    $scope.addQueue = function (player) {
        var result = parseInt(player.throw) +
                     parseInt(player.run) +
                     parseInt(player.defense) +
                     parseInt(player.height) +
                     parseInt(player.catch)
        ;

        $scope.que.$add({
            PID: player.PID,
            name: player.name,
            stats: result
        })

        //console.log(result);
    }

});

project.controller('QueueCtrl', function ($scope, fbaQueue, fbQueue) {
    $scope.que = fbaQueue;
    var teamQueue = fbQueue;

    var fourtiesplus = [];    
    var thirties = [];
    var Everyone = [];

    $scope.teamA = [];
    $scope.teamB = [];

    //once finished, but in the create teams function
    teamQueue.on('value', function (thisPerson) {
        var playerQueue = thisPerson.val();

        for (var player in playerQueue)
        {
            var teamPlayer = teamQueue.child(player);

            teamPlayer.on('value', function (thisPlayer) {
                if (thisPlayer.val().stats > 390)
                    fourtiesplus.push(thisPlayer.val().PID);
                else if (thisPlayer.val().stats > 290)
                    thirties.push(thisPlayer.val().PID);
                else
                    Everyone.push(thisPlayer.val().PID);
            })                        
        }
        //this will randomize each array
        shuffleArray(fourtiesplus);
        shuffleArray(thirties);
        shuffleArray(Everyone);

    });

    $scope.clearQueue = function ()
    {
        $scope.que.$remove();
        //$scope.teamA.$remove();
        //$scope.teamB.$remove();
    }

    $scope.createTeams = function()
    {
        var x = fourtiesplus;
        var y = thirties;
        var z = Everyone;

        createTeam(fourtiesplus);
        createTeam(thirties);
        createTeam(Everyone);
        //alert('soon');       
    }
    var createTeam = function (array)
    {
        
        while (array.length) {
            if ($scope.teamA.length > $scope.teamB.length)
                $scope.teamB.push(array.pop());
            else
                $scope.teamA.push(array.pop());            
        }
        return true;
    }
});

var shuffleArray = function (array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

