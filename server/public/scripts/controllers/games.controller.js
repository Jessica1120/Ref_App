myApp.controller('GamesController', function(GamesService) {
    console.log('GamesController created');
    
    var vm = this;
    
    vm.gameList = GamesService.gameList; //games object

    vm.sendThisGame = function(game) {
        console.log('sendThisGame GC', game);
        GamesService.sendThisGame(game)
    };

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
        vm.dateIn = ''
        vm.locationIn = ''
        vm.teamOneIn = ''
        vm.teamTwoIn = ''
    }; //end function
}); //end controller
