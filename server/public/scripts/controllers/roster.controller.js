myApp.controller('RosterController', function(GamesService) {
    console.log('RosterController created');
    var vm = this;
    
   vm.thisGame = GamesService.thisGame; // this game

    vm.refArray = []; // add refs here from DOM

    vm.roster = []; // final roster


    vm.getThisGame = function() {
        GamesService.getThisGame();
        console.log('RC', GamesService.thisGame)
    }; //end getGames

    vm.addRef = function() {
            var newRef = {
                name: vm.nameIn,
                iprRate: vm.iprIn,
                jrRate: vm.jrIn,
                oprRate: vm.oprIn,
            } //end ref object
            vm.refArray.push(newRef); // pushes ref object into refArray
            console.log(vm.refArray);
            vm.nameIn = ''
            vm.iprIn = ''
            vm.jrIn = ''
            vm.oprIn = ''
    }; //end addRef
        
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
                    } //end findIpr if
                } //end for loop
            }; // end findIpr
        
        vm.findJr = function() {
            for (let i=0; i <vm.refArray.length; i++) {
                if (3 <= vm.refArray[i].jrRate) {
                    vm.roster.push(vm.refArray[i]);
                    vm.refArray.splice(i, 1);
                    } //end findJr if
            } //end for loop
        }; // end findJr
        
        vm.findOpr = function() {
            for (let i=0; i <vm.refArray.length; i++) {
                if (3 <= vm.refArray[i].oprRate) {
                    vm.roster.push(vm.refArray[i]);
                    vm.refArray.splice(i, 1);
                } //end findOpr if
            } //end for loop
        }; // end findOrp
            
        vm.findIpr();
        vm.findJr();
        vm.findOpr();
            console.log('remaining refArray', vm.refArray);
            console.log('suggested roster', vm.roster);
    }; //end find Roster function
        
    vm.saveRoster = function() {
        var rosterObj = {
            headref: vm.roster[0].name,
            ipr: vm.roster[1].name,
            jr1: vm.roster[2].name,
            id: vm.thisGame.data[0].id,
        } //error "cannon read property of undefined" must have entry to work - figure out a way to fix this - maybe if empty/then fake data
        GamesService.saveRoster(rosterObj)
        console.log('final roster', rosterObj);
        vm.getThisGame();
    }; //end saveRoster function

}); //end RosterController    
 