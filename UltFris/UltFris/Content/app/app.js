angular.module("myapp", ["firebase"])
        .value('fbAuthToken', 'KVHxq4JCUBdBAfy7Aa3M6ca0mEq9ZE2zqltgI83e')
        .value('fbURL', 'https://ultfris.firebaseio.com');

function MyController($scope, $firebase) {

    var ref = new Firebase("https://ultfris.firebaseio.com");
    $scope.messages = $firebase(ref);

    //keycode 13 is enter
    $scope.addMessage = function (e) {
        if (e.keyCode != 13) return;
        $scope.messages.$add({ from: $scope.name, body: $scope.msg });
        $scope.msg = "";
    }

    $scope.addMess = function (e) {
        $scope.messages.$add({ from: $scope.name, body: $scope.msg });
        $scope.msg = "";
    }
}
       //.value('fbAuthToken', 'KVHxq4JCUBdBAfy7Aa3M6ca0mEq9ZE2zqltgI83e')
       //.value('fbURL', 'https://ultfris.firebaseio.com/');