myApp.controller('ProfileController', function(ProfileService) {
    console.log('ProfileController created');
    
    var vm = this
   
    vm.profileInfo = ProfileService.profileInfo; //object

    vm.toggle = function () {
      profile = !profile;
      console.log(photo.see);
  };
    vm.getProfile = function() {
      ProfileService.getProfile();
      console.log('profileInfo', ProfileService.profileInfo);
  }; //end getProfile function
});//end ProfileController