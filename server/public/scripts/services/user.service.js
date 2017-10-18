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
            if(response.data.username) {
                // user has a curret session on the server
                self.userObject.username = response.data.username//self.userObject.userName = response.data.username; //resend this in new get function for profile
                console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
            } else {
                console.log('UserService -- getuser -- failure', response);
                // user has no session, bounce them back to the login page
                $location.path("/home");
            }
          });
        };
  
      self.logout = function() {
        console.log('UserService -- logout');
        $http({
          method: 'GET',
          url:  '/user/logout'
        }).then(function(response) {
          console.log('UserService -- logout -- logged out');
          $location.path("/home");
        });
      };
    });
  
    // self.getprofile = function(){
    //   console.log('UserService -- getprofile');
    //   $http ({
    //     method: 'GET',
    //     url:  '/profile',
    //   }).then(function(response) {
    //       if(response.data.username) {
    //           // user has a curret session on the server
    //           self.userObject.userName = response.data.username; //resend this in new get function for profile
    //           console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
    //       } else {
    //           console.log('UserService -- getuser -- failure', response);
    //           // user has no session, bounce them back to the login page
    //           $location.path("/home");
    //       }
    //     });
    //   };