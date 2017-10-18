myApp.controller('RosterController', function(GamesService) {
    console.log('RosterController created');
      var vm = this;
      vm.gameList = GamesService.gameList;

      vm.getGames = function() {
        GamesService.getGames();
        console.log('GamesService.gameList', GamesService.gameList)
      }; //end getGames

        vm.refArray = []; // add refs here from DOM
        
        // console.log(refArray[0]);
        // var test = refArray[0].jrRate;
        vm.roster = []; // final roster
        
        vm.addRef = function() {
            var newRef = {
                name: vm.nameIn,
                iprRate: vm.iprIn,
                jrRate: vm.jrIn,
                oprRate: vm.oprIn,
            }
            vm.refArray.push(newRef);  
            
            
            // iprRate = vm.iprIn,
            // jrRate: vm.jrIn,
            // oprRate: vm.oprIn,
            console.log(vm.refArray);
        };
        
        vm.findRoster = function () { //generates roster
            
            vm.findIpr = function() {
                var multiple = []
                for (let i=0; i <vm.refArray.length; i++) {
                    if (3 <= vm.refArray[i].iprRate) {
                        multiple.push(vm.refArray[i])
                        var assigned = multiple[Math.floor(Math.random() * multiple.length)];
                        vm.roster.push(assigned);
                        vm.refArray.splice(assigned, 1);
                        console.log('temp array:', multiple);
                        console.log('assigned Ref:', assigned)
                        // vm.roster.push(vm.refArray[i]);
                        // vm.refArray.splice(i, 1);
                    } 
                } 
            };
        
            vm.findJr = function() {
                for (let i=0; i <vm.refArray.length; i++) {
                    if (3 <= vm.refArray[i].jrRate) {
                        vm.roster.push(vm.refArray[i]);
                        vm.refArray.splice(i, 1);
                    }
                } 
            };
        
            vm.findOpr = function() {
                for (let i=0; i <vm.refArray.length; i++) {
                    if (3 <= vm.refArray[i].oprRate) {
                        vm.roster.push(vm.refArray[i]);
                        vm.refArray.splice(i, 1);
                    }
                } 
            };
            vm.findIpr();
            vm.findJr();
            vm.findOpr();
            console.log('remaining refArray', vm.refArray);
            console.log('the final roster', vm.roster);
        }
        
        // vm.findRoster();
        
        });


    
 