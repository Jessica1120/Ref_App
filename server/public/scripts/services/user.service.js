myApp.service('UserService', function($http, $location){
    console.log('UserService Loaded');
    var self = this;
  
    self.userObject = {};
  
      self.getuser = function(){
        console.log('UserService -- getuser');
        $http ({
          method: 'GET',
          url:  '/user',
        }).then(function(response) {
            if(response.data) {
                // user has a curret session on the server
                self.userObject.username = response.data.username;
                console.log('UserService -- getuser -- User Data: ', self.userObject.username);
            } else {
                console.log('UserService -- getuser -- failure', response);
                // user has no session, bounce them back to the login page
                $location.path("/home");
            } //end of else
          }); //end of .then
        }; //end of getuser function
  
      self.logout = function() {
        console.log('UserService -- logout');
        $http({
          method: 'GET',
          url:  '/user/logout'
        }).then(function(response) {
          console.log('UserService -- logout -- logged out');
          $location.path("/home");
        });//end of .then
      }; //end of logout function
    });
  
    