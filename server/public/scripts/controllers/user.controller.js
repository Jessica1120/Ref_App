myApp.controller('UserController', function(UserService) {
    console.log('UserController created');
    var vm = this;
    vm.userService = UserService; // this is the get user and log out functions and the userObject 
    vm.userObject = UserService.userObject;
  });