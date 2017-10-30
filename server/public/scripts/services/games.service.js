myApp.service('GamesService', function($http, $location){
    console.log('GamesService Loaded');

    var self = this;

    self.gameList = {data: []}//GamesController
    self.thisGame = {data:[]}

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
        }); //end the
    }; //end addGame

    // self.getThisGame = function(id) {
    //     console.log('sendThisGame GS http', id);
    //     $http({
    //         method: 'GET',
    //         url:    '/thisGame/' + id    
    //      })
    //      .then(function(res) {
    //         $location.path('/roster:id')
    //         self.thisGame = (res)
    //         console.log('getThisGame GS response', res);
    //     }) //end then
    // };end sendThisGame - stored on server only

    
}); //end GameService

