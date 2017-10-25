myApp.service('ProfileService', function($http, $location){
    console.log('ProfileService Loaded');
    
    var self = this

    self.profileInfo = {};
    
    self.getProfile = function() {
        $http( {
            method: 'GET',
            url: '/profile'
        }).then(function(res) {
            self.profileInfo.data = (res.data);
        }); //end then
    }; //end getProfileInfo function

    self.updateProfile = function(objToSend) {
        $http({
            method: 'PUT',
            url:    '/profile',
            data:   objToSend
        }).then(function(res) {
            console.log('update Profile response:', res );
            self.getProfile();
        }); //end then
    }; //end addGame
    
}); //end ProfileService