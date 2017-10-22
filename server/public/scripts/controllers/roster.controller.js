myApp.controller('RosterController', function(RosterService) {
    console.log('RosterController created');
    var vm = this;
    
    vm.thisGame = RosterService.thisGame; // object for getThisGame function
    
    vm.allRefs = RosterService.allRefs; // object for getRefs function

    vm.refArray = []; // pushed from addRef

    vm.roster = [];// final roster

    //client side only functions
    vm.addRef = function() {
        var newRef = {
            derbyname: vm.derbyNameIn,
            hrRate: vm.hrIn,
            iprRate: vm.iprIn,
            jr1Rate: vm.jr1In,
        } //end ref object
        vm.refArray.push(newRef); // pushes ref object into refArray
        console.log('refArray', vm.refArray);
        vm.derbyNameIn = ''
        vm.hrIn = ''
        vm.iprIn = ''
        vm.jr1In = '' //clears form
    }; //end addRef 
   
    //generates roster
    vm.findRoster = function () {

        vm.findHr = function() {
            tempHr = []
            for (let i=0; i <vm.refArray.length; i++) {
                if (3 <= vm.refArray[i].hrRate) {
                    tempHr.push(vm.refArray[i])
                    console.log('temparry', tempHr)
                }//end 'if' statement
            }//end for loop
            if (1 > tempHr.length) {
                for (let i=0; i <vm.refArray.length; i++) {
                    if (2 == vm.refArray[i].hrRate) {
                        tempHr.push(vm.refArray[i])
                        console.log('temparry', tempHr)
                    }//end 'if' statement
                }//end for loop
            } //end if 1>
            var assigned1 = tempHr[Math.floor(Math.random() * tempHr.length)]
            var assigned2 = vm.refArray.indexOf(assigned1);
            console.log('assigned1, assigned2', assigned1, assigned2)
            vm.roster.splice(0, 0, assigned1);
            
            vm.remove = function(refArray, assigned1) {
                console.log('remove function running');
                vm.refArray.splice(assigned2, 1);
                }
            vm.remove ();
            console.log('this is the temparray', tempHr)  
            } //end findHR function
            console.log('this is the roster', vm.roster);
            
            console.log('this is the remaining refArray', vm.refArray);
        vm.findHr()
        } //end find Roster 
    
        
    //gets the game in server posted by Game Controller/Service
    vm.getThisGame = function() {
        RosterService.getThisGame();
        console.log('RC getThisGame', RosterService.thisGame)
        vm.refArray = [];
    }; //end getThisGame
      
    //gets refs from DataBase
    vm.getRefs = function() {
        RosterService.getRefs();
        console.log('RC getRefs', RosterService.allRefs)
    };

    //saves roster to DataBase
    vm.saveRoster = function() {
        var rosterObj = {
            headref: vm.roster[0].derbyname,
            ipr: vm.roster[1].derbyname,
            jr1: vm.roster[2].derbyname,
            id: vm.thisGame.data[0].id,
        } //error "cannon read property of undefined" must have entry to work - figure out a way to fix this - maybe if empty/then null function
        RosterService.saveRoster(rosterObj)
        console.log('final roster', rosterObj);
        vm.getUpdatedGame();
    }; //end saveRoster function
    vm.getUpdatedGame = function() {
        RosterService.getUpdatedGame();
    };
}); //end RosterController    
 