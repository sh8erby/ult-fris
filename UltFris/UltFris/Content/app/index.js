var project = angular.module('project')

project.controller('MyCtrl', function($scope, test)
{
     $scope.messages = test;
});