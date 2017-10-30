myApp.controller('GamesController', function(GamesService) {
    console.log('GamesController created');
    
    var vm = this;
    
    vm.gameList = GamesService.gameList; //games object

    //runs on page load
    vm.getGames = function() {
        GamesService.getGames();
        console.log('GC - gameList', GamesService.gameList)
    }; //end getGames 
   
    //runs on click of add button
    vm.addGame = function() {
        var objToSend = {
            date:   vm.dateIn,
            city:   vm.cityIn,
            state:  vm.stateIn,
            team1:    vm.team1In,
            team2:    vm.team2In
        }; //end object
        console.log('obj', objToSend);
        GamesService.addGame(objToSend); //pass object to service
        vm.dateIn = ''
        vm.cityIn = ''
        vm.stateIn = ''
        vm.team1In = ''
        vm.team2In = ''
    }; //end addGame function
   
//    runs when game is clicked on - sends game to load roster view
    // vm.getThisGame = function(game) {
    //     console.log('getThisGame GC', game);
    //     GamesService.getThisGame(game)
    // }; //end sendThisGame function

}); //end GamesController
