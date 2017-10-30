myApp.service('RosterService', function($http, $location){
    console.log('RosterService Loaded');
    var self = this

    self.thisGame = {data: []} //object from getThisGame fu`nction

    self.allRefs = {data: []} //object from getRefs function

    self.updatedRoster = {data: []} //object from updateRoster function

    self.getThisGame = function(game) {
        console.log('RS game id', game)
        console.log('getThisGame RS http', game );
       return $http({
            method: 'GET',
            url:    '/thisGame/' +  game   
         })
         .then(function(res) {
            self.thisGame = (res.data)
            console.log('getThisGame RS response', self.thisGame);
            $location.path('/roster')
        }) //end then
    }; //end getThisGame
   
   
    self.getRefs = function() {
        $http({
            method: 'GET',
            url:    '/roster',
        }).then(function(res) {
            self.allRefs.data = (res.data);
            console.log('RS getRefs', self.allRefs.data)
        }); // end then
    }; //end getRefs function

    self.saveRoster = function(rosterObj) {
        console.log('RS rosterObj:', rosterObj);
        $http({
            method: 'PUT',
            url:    '/roster',
            data:   rosterObj
        }).then(function(res) {
            console.log('save roster RS', res );
        }); //end then
    }; //end saveGame 

    self.updateRoster = function(rosterObj) {
        console.log('updateRoster Running', rosterObj)
        $http({
            method: 'PUT',
            url:    '/updateRef',
            data: rosterObj
        }).then(function(res) {
            console.log('RS updateRefs', res) 
            self.getThisGame()
        }); // end then
    }; //end updateRoster function
}); //end Roster Service    

    
    
    
    
    
    
    
    
    
    


