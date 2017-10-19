myApp.controller('GamesController', function(GamesService) {
    console.log('GamesController created');
    
    var vm = this;
    
    vm.gameList = GamesService.gameList; //games object

    vm.sendThisGame = GamesService.sendThisGame

    vm.getGames = function() {
        GamesService.getGames();
        console.log('GamesService.gameList', GamesService.gameList)
    }; //end getGames

    vm.addGame = function() {
        var objToSend = {
            date:   vm.dateIn,
            location:   vm.locationIn,
            teamOne:    vm.teamOneIn,
            teamTwo:    vm.teamTwoIn
        }; //end object
        console.log('obj', objToSend);
        GamesService.addGame(objToSend); //pass object to service
    }; //end function
}); //end controller
