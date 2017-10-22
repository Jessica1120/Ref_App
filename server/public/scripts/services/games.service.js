myApp.service('GamesService', function($http, $location){
    console.log('GamesService Loaded');

    var self = this;

    self.gameList = {data: []}//GamesController

    self.getGames = function() {
        $http({
            method: 'GET',
            url:    '/games',
        }).then(function(res) {
            self.gameList.data = (res.data);
            console.log('GS - gameList', self.gameList)
        }); // end callback
    }; //end Get function

    self.addGame = function(objToSend) {
        $http({
            method: 'POST',
            url:    '/games',
            data:   objToSend
        }).then(function(res) {
            console.log('AddGame response:', res );
            self.getGames();
        }); //end then
    }; //end addGame

    self.sendThisGame = function(game) {
        console.log('sendThisGame GS http', game);
        $http({
            method: 'POST',
            url:    '/thisGame',
            data:   game
        }).then(function(res) {
            console.log('sendThisGame GS response', res);
        }) //end then
    }; //end sendThisGame - stored on server only

    
}); //end GameService

