angular.module("myapp", ["firebase"])
        .value('fbAuthToken', 'KVHxq4JCUBdBAfy7Aa3M6ca0mEq9ZE2zqltgI83e')
        .value('fbURL', 'https://ultfris.firebaseio.com/');

function MyController($scope, $firebase) {

    var ref = new Firebase("https://ultfris.firebaseio.com/");
    var thisplaya = ref.child('players');
    
    //displays object that shows all the players
    thisplaya.on('value', function (mahfriend) {
        var allPlayers = mahfriend.val();

        for (var test in allPlayers) {
            var childNode = thisplaya.child(test);
            
            childNode.on('value', function (thisChild) {
                console.log(thisChild.val().name);
            })
        }
    });
    
    $scope.players = $firebase(thisplaya);

 
    //ref.on('value', function (snapshot) {

    //    var firstName = snapshot.val();
    //    var lastName = snapshot.val();
    //});

    ////keycode 13 is enter
    ////$scope.addMessage = function (e) {
    ////    if (e.keyCode != 13) {
    ////        return;
    ////    }
    ////    $scope.messages.$add({ from: $scope.name, body: $scope.msg });
    ////    $scope.msg = "";
    ////}

    //$scope.addMess = function (e) {
    //    $scope.messages.$add({
    //        name: $scope.perName,
    //        throw: $scope.perThrow,
    //        catch: $scope.perCatch,
    //        run: $scope.perRun,
    //        defense: $scope.perDefense
    //    });
    //$scope.name = "";
    //$scope.msg = "";

    $scope.addMess = function (e) {
        thisplaya.push({
            name: $scope.perName,
            throw: $scope.perThrow,
            catch: $scope.perCatch,
            run: $scope.perRun,
            defense: $scope.perDefense
        });

        $scope.perName = "";
        $scope.perThrow = "";
        $scope.perCatch = "";
        $scope.perRun = "";
        $scope.perDefense = "";
    }



}
       //.value('fbAuthToken', 'KVHxq4JCUBdBAfy7Aa3M6ca0mEq9ZE2zqltgI83e')
       //.value('fbURL', 'https://ultfris.firebaseio.com/');