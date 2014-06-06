var project = angular.module('myapp')

project.controller('RosterController', function ($scope, fbaRoster)
{

    $scope.players = fbaRoster;
});

project.controller('CreateController', function ($scope, fbaRoster) {

    var thisplaya = fbaRoster;

    $scope.addPlayer = function (e) {
        thisplaya.push({
            PID: $scope.perFName + $scope.perLName,
            name: $scope.perFName,
            throw: $scope.perThrow,
            catch: $scope.perCatch,
            height: $scope.perHeight,
            run: $scope.perRun,
            defense: $scope.perDefense
        });

    $scope.perFName = "";
    $scope.perLName = "";
    $scope.perThrow = "";
    $scope.perCatch = "";
    $scope.perRun = "";
    $scope.perHeight = "";
    $scope.perDefense = "";
    }
});