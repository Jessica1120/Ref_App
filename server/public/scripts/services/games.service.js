myApp.service('GamesService', function($http, $location){
    console.log('GamesService Loaded');

    var self = this;

    self.thisGame = {data: []} //RosterController

    self.gameList = {data: []}//GamesController

    //functions for GamesController
    self.getGames = function() {
        $http({
            method: 'GET',
            url:    '/games',
        }).then(function(res){
            console.log('in service response:', res)
            self.gameList.data = (res.data);
            console.log('self.gameList', self.gameList)
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

     //functions for RosterController
     self.sendThisGame = function(item) {
         console.log('in this game http call', item)
        $http({
            method: 'POST',
            url:    '/thisGame',
            data:   item
        }).then(function(res) {
            console.log('SendThisGame response:', res );
            self.getThisGame();
        }); //end then
    }; //end sendThisGame

    self.getThisGame = function() {
        $http({
            method: 'GET',
            url:    '/thisGame',
        }).then(function(res){
            console.log('in service response:', res.data);
            self.thisGame.data = (res.data);
            console.log('GS thisGame', self.thisGame.data)
        }); // end callback
    }; //end Get function

    self.sendThisGame = function(game) {
        console.log('sendThisGame GS http', game);
        $http({
            method: 'POST',
            url:    '/thisGame',
            data:   game
        }).then(function(res) {
            console.log('sendThisGame GS response', res);
            self.getThisGame();
        })
    }


    self.saveRoster = function(rosterObj) {
        $http({
            method: 'PUT',
            url:    '/thisGame',
            data:   rosterObj
        }).then(function(res) {
            console.log('AddGame response:', res );
            self.sendThisGame()
        }); //end then
    }; //end addGame 
    
    
}); //end GameService

