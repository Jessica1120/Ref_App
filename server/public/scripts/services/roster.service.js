myApp.service('RosterService', function($http, $location){
    console.log('RosterService Loaded');
    var self = this

    self.thisGame = {data: []} //object from getThisGame function

    self.allRefs = {data: []} //object from getRefs function

    self.getThisGame = function() {
        $http({
            method: 'GET',
            url:    '/thisGame',
        }).then(function(res) {
            self.thisGame.data = (res.data);
            console.log('RS getThisGame', self.thisGame.data)
        }); // end then
    }; //end getThisGame function

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

    // self.getUpdatedGame = function() {
    //     $http({
    //         method: 'GET',
    //         url:    '/thisGame',
    //     }).then(function(res) {
    //         self.thisGame.data = (res.data);
    //         console.log('RS getRefs', self.updatedGame.data) //figure out how to get this.
    //     }); // end then
    // }; //end getRefs function
}); //end Roster Service    

    
    
    
    
    
    
    
    
    
    


