var project = angular.module ('project');

project.controller('MessagesCtrl', function($scope, fbaDebugMsg)
{ 
	$scope.messages = fbaDebugMsg;				
});

project.controller('DebugCtrl', function ($scope, fbDebugMsg, fbRequestUrl) {
    $scope.fbDebugMsg = fbDebugMsg;
    $scope.fbRequestUrl = fbRequestUrl;
});

project.controller('CreateCtrl',function ($scope, fbaRoster){
    var thisplaya = fbaRoster;
    
    $scope.addPlayer = function ()
    {
        thisplaya.$add({
            PID: $scope.perFName + $scope.perLName,
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

project.controller('QueueCtrl', function ($scope, fbaQueue) {
    $scope.que = fbaQueue;
    var fifties = [];
    var fourties = [];
    var thirties = [];
    var Everyone = [];
    
    angular.forEach($scope.que, function () {
        //extract all everything in the queue
        var hello = $scope.que.name;

    });

    $scope.clearQueue = function ()
    {
        $scope.que.$remove()
    }

    $scope.createTeams = function()
    {
        alert('soon');

    }
});