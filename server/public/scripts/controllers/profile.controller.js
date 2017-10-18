myApp.controller('ProfileController', function(UserService, ProfileService) {
    console.log('ProfileController created');
    var vm = this
    vm.userService = UserService;

    vm.profileInfo = ProfileService.profileInfo;//object


  vm.getProfile = function() {
    ProfileService.getProfile();
    console.log('profileInfo', ProfileService.profileInfo);
  };
});