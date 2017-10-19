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
            console.log('the final roster', vm.roster);
    }; //end find Roster function
        
}); //end RosterController


    
 