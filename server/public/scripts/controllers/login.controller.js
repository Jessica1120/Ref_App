myApp.controller('LoginController', function($http, $location, UserService) {
    console.log('LoginController created');
    var vm = this;
    vm.user = {
      username: '',
      password: ''
    };
    vm.message = '';

    vm.login = function() {
      console.log('LoginController -- login');
      if(vm.user.username === '' || vm.user.password === '') { //if entries are empty
        vm.message = "Enter your username and password!";      //tells you to enter info
      } else {
        console.log('LoginController -- login -- sending to server...'); 
        $http.post('/', vm.user).then(function(response) { //if filled in...
          if(response.data.username) {   //and if correct
            console.log('LoginController -- login -- success: ');
            // location works with SPA (ng-route)
            $location.path('/user'); // redirect page to http://localhost:5000/#/user
          } else {   //if entered and NOT correct
            console.log('LoginController -- login -- failure: ', response); //send back to log in
            vm.message = "Wrong!!";
          }
        }).catch(function(response){
          console.log('LoginController -- registerUser -- failure: ', response);
          vm.message = "Wrong!!";
        });
      }
    };

    vm.registerUser = function() {
      console.log('LoginController -- registerUser');
      if(vm.user.username === '' || vm.user.password === '') {
        vm.message = "Choose a username and password!";
      } else {
        console.log('LoginController -- registerUser -- sending to server...');
        $http.post('/register', vm.user).then(function(response) {
          console.log('LoginController -- registerUser -- success');
          $location.path('/home');
        }).catch(function(response) {
          console.log('LoginController -- registerUser -- error');
          vm.message = "Please try again."
        });
      }
    }
});