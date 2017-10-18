myApp.service('ProfileService', function($http, $location){
    console.log('ProfileService Loaded');
    
    var self = this

    self.profileInfo = {};
    
    self.getProfile = function() {
        $http( {
            method: 'GET',
            url: '/profile'
        }).then(function(res) {
            console.log('in profile.service response:', res);
            self.profileInfo.data = (res.data);
            console.log('self.profileInfo', self.profileInfo.data)
        }); //end then
    }; //end getProfileInfo function
}); //end ProfileService