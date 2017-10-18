myApp.service('GamesService', function($http, $location){
    console.log('GamesService Loaded');

    var self = this;

    self.gameList = {}
    
    self.getGames = function() {
        $http({
            method: 'GET',
            url:    '/games',
        }).then(function(res){
            console.log('in service response:', res.data);
            self.gameList.data = (res.data);
            console.log('self.gameList', self.gameList.data)
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
}); //end GameService

