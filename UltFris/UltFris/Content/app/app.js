angular.module("myapp", ["firebase"])
        .value('fbAuthToken', 'KVHxq4JCUBdBAfy7Aa3M6ca0mEq9ZE2zqltgI83e')
        .value('fbURL', 'https://ultfris.firebaseio.com/');


function MyController($scope, $firebase) {

    var ref = new Firebase("https://ultfris.firebaseio.com/");
    var thisplaya = ref.child('players');
    
    //displays object that shows all the players
    thisplaya.on('value', function (mahfriend) {
         var allPlayers= mahfriend.val();

        //displays the name of each child node
        for (var test in allPlayers) {
            var childNode = thisplaya.child(test);
            
            //childNode.on('value', function (thisChild) {
              //  console.log(thisChild.val().name);
            //})
        }
    });
     
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
    
    //shows the roster
    $scope.players = $firebase(thisplaya);

    $scope.addMess = function (e) {
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



}
       //.value('fbAuthToken', 'KVHxq4JCUBdBAfy7Aa3M6ca0mEq9ZE2zqltgI83e')
       //.value('fbURL', 'https://ultfris.firebaseio.com/');