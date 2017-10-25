myApp.controller('ProfileController', function(ProfileService) {
    console.log('ProfileController created');
    
    var vm = this
   
    vm.profileInfo = ProfileService.profileInfo; //object

    vm.getProfile = function() {
      ProfileService.getProfile();
      console.log('profileInfo', ProfileService.profileInfo);

     vm.updateProfile = function() {
       var objToSend = {
      derbyname:    vm.derbyNameIn,
      league:       vm.leagueIn,
      city:         vm.cityIn,
      state:        vm.stIn,
      games_history:    vm.gameHistoryIn,
      email:            vm.emailIn,
      certifications: vm.certsIn,
      bio:          vm.bioIn,
  }; 
    console.log('obj', objToSend);
    ProfileService.updateProfile(objToSend); //pass object to service
  
}; //end addGame function

  }; //end getProfile function
});//end ProfileController