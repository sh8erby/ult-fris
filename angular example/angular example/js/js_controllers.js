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
        console.log(player);
        $scope.showModal = false;
    }

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

        console.log(result);
    }

});

project.controller('QueueCtrl', function ($scope, fbaQueue, fbQueue) {
    $scope.que = fbaQueue;
    var teamQueue = fbQueue;

    var fourtiesplus = [];    
    var thirties = [];
    var Everyone = [];    
    
    //once finished, but in the create teams function
    teamQueue.on('value', function (thisPerson) {
        var playerQueue = thisPerson.val();

        for (var player in playerQueue)
        {
            var teamPlayer = teamQueue.child(player);

            teamPlayer.on('value', function (thisPlayer) {
                if (thisPlayer.val().stats > 39)
                    fourtiesplus.push(thisPlayer.val().PID);
                else if (thisPlayer.val().stats > 29)
                    thirties.push(thisPlayer.val().PID);
                else
                    Everyone.push(thisPlayer.val().PID);
            })
            //shows the name of the child
            //need to put in to check the value of the stat
            //if stat > 40, push into the fourties+ array
            //
            //split teams randomly
            //
            
        }

    });

    //angular.forEach($scope.que, function () {
    //    //extract all everything in the queue
    //    var hello = $scope.que.name;
    //    //alert();

    //});

    $scope.clearQueue = function ()
    {
        $scope.que.$remove()
    }

    $scope.createTeams = function()
    {
        alert('soon');

    }
});