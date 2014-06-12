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
     

    //shows the roster controller
    $scope.players = $firebase(thisplaya);

    //create controller
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