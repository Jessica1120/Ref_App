myApp.controller('ProfileController', function(ProfileService) {
    console.log('ProfileController created');
    var vm = this

vm.profileInfo = ProfileService.profileInfo;//object
 

  vm.getProfile = function() {
    ProfileService.getProfile();
    console.log('profileInfo', ProfileService.profileInfo);
  };
});