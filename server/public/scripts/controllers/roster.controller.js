myApp.controller('RosterController', function (RosterService) {
    console.log('RosterController created');
    var vm = this;

    vm.thisGame = RosterService.thisGame; // object for getThisGame function

    vm.allRefs = RosterService.allRefs; // object for getRefs function

    vm.refArray = []; // pushed from addRef

    vm.roster = [];// final roster

    //client side only functions
    vm.addRef = function () {
        var newRef = {
            derbyname: vm.derbyNameIn,
            hrRate: vm.hrIn,
            iprRate: vm.iprIn,
            jrRate: vm.jrIn,
            oprRate: vm.oprIn,
        } //end ref object
        vm.refArray.push(newRef); // pushes ref object into refArray
        console.log('refArray', vm.refArray);
        vm.derbyNameIn = ''
        vm.hrIn = ''
        vm.iprIn = ''
        vm.jrIn = ''
        vm.oprIn = '' //clears form
    }; //end addRef 

    //generates roster
    vm.findRoster = function () {

        vm.findHr = function () {
            console.log('findHr is running')
            tempHr = []
            for (let i = 0; i < vm.refArray.length; i++) {
                if (3 <= vm.refArray[i].hrRate) {
                    tempHr.push(vm.refArray[i])
                }//end 'if' statement
            }//end for loop
            if (1 > tempHr.length) {
                for (let i = 0; i < vm.refArray.length; i++) {
                    if (2 == vm.refArray[i].hrRate) {
                        tempHr.push(vm.refArray[i])
                    }//end 'if' statement
                }//end for loop
            } //end if 1>
            if (1 > tempHr.length) {
                for (let i = 0; i < vm.refArray.length; i++) {
                    if (1 == vm.refArray[i].hrRate) {
                        tempHr.push(vm.refArray[i])
                    }//end 'if' statement
                }//end for loop
            } //end if 1>
            var assigned1 = tempHr[Math.floor(Math.random() * tempHr.length)]
            var assigned2 = vm.refArray.indexOf(assigned1);
            vm.roster.splice(0, 0, assigned1);

            vm.remove = function (refArray, assigned1) {
                vm.refArray.splice(assigned2, 1);
            }
            vm.remove();
            console.log('findHr is done')
            vm.findIpr();
        } //end findHR function

        vm.findIpr = function () {
            console.log('findIpr is running')
            tempHr = []
            for (let i = 0; i < vm.refArray.length; i++) {
                if (3 <= vm.refArray[i].iprRate) {
                    tempHr.push(vm.refArray[i])
                }//end 'if' statement
            }//end for loop
            if (1 > tempHr.length) {
                for (let i = 0; i < vm.refArray.length; i++) {
                    if (2 == vm.refArray[i].iprRate) {
                        tempHr.push(vm.refArray[i])
                    }//end 'if' statement
                }//end for loop
            } //end if 1>
            if (1 > tempHr.length) {
                for (let i = 0; i < vm.refArray.length; i++) {
                    if (1 == vm.refArray[i].iprRate) {
                        tempHr.push(vm.refArray[i])
                    }//end 'if' statement
                }//end for loop
            } //end if 1>
            var assigned1 = tempHr[Math.floor(Math.random() * tempHr.length)]
            var assigned2 = vm.refArray.indexOf(assigned1);

            vm.roster.splice(1, 0, assigned1);

            vm.remove = function (refArray, assigned1) {
                vm.refArray.splice(assigned2, 1);
            } //end remove function
            vm.remove();
            console.log('findIpr is done.')
            vm.findJrs();
        } //end findipR function

        vm.findJrs = function () {
            console.log('findJrs is running')
            tempHr = []
            for (let i = 0; i < vm.refArray.length; i++) {
                if (3 <= vm.refArray[i].jrRate) {
                    tempHr.push(vm.refArray[i])
                }//end 'if' statement
            }//end for loop
            if (2 > tempHr.length) {
                for (let i = 0; i < vm.refArray.length; i++) {
                    if (2 == vm.refArray[i].jrRate) {
                        tempHr.push(vm.refArray[i])
                    }//end 'if' statement
                }//end for loop
            } //end if 1>
            if (2 > tempHr.length) {
                for (let i = 0; i < vm.refArray.length; i++) {
                    if (1 == vm.refArray[i].hrRate) {
                        tempHr.push(vm.refArray[i])
                    }//end 'if' statement
                }//end for loop
            } //end if 1>

            vm.shuffle = function (refArray) {
                console.log('shuffle')
                var currentIndex = vm.refArray.length, tempVal, randomIndex
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    // And swap it with the current element.
                    tempVal = vm.refArray[currentIndex];
                    vm.refArray[currentIndex] = vm.refArray[randomIndex];
                    vm.refArray[randomIndex] = tempVal;
                }//end while loop
                return refArray;
            }//end shuffle
            vm.shuffle();
            var jr1 = vm.refArray[0]
            var jr2 = vm.refArray[1];
            vm.roster.splice(2, 0, jr1);
            vm.roster.splice(3, 0, jr2);
            vm.refArray.splice(jr1, 1);
            vm.refArray.splice(jr2, 1);

            console.log('jrs', jr1, jr2)
            console.log('findJrs is done')
            vm.findOprs();
        } //end findJRs function

        vm.findOprs = function () {
            console.log('findOprs is running')
            tempHr = []
            for (let i = 0; i < vm.refArray.length; i++) {
                if (3 <= vm.refArray[i].oprRate) {
                    tempHr.push(vm.refArray[i])
                }//end 'if' statement
            }//end for loop
            if (3 > tempHr.length) {
                for (let i = 0; i < vm.refArray.length; i++) {
                    if (2 == vm.refArray[i].oprRate) {
                        tempHr.push(vm.refArray[i])
                    }//end 'if' statement
                }//end for loop
            } //end if 3/2
            if (3 > tempHr.length) {
                for (let i = 0; i < vm.refArray.length; i++) {
                    if (1 == vm.refArray[i].oprRate) {
                        tempHr.push(vm.refArray[i])
                    }//end 'if' statement
                }//end for loop
            } //end if 3/1
            vm.shuffle = function (refArray) {
                console.log('shuffle')
                var currentIndex = vm.refArray.length, tempVal, randomIndex
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    // And swap it with the current element.
                    tempVal = vm.refArray[currentIndex];
                    vm.refArray[currentIndex] = vm.refArray[randomIndex];
                    vm.refArray[randomIndex] = tempVal;
                }//end while loop
                return refArray;
            }//end shuffle
            vm.shuffle();
            var opr1 = vm.refArray[0]
            var opr2 = vm.refArray[1];
            var opr3 = vm.refArray[2];
            vm.roster.splice(4, 0, opr1);
            vm.roster.splice(5, 0, opr2);
            vm.roster.splice(6, 0, opr3);
            vm.refArray.splice(opr1, 1);
            vm.refArray.splice(opr2, 1);
            vm.refArray.splice(opr3, 1);


            console.log('refArray', vm.refArray)
            console.log('roster', vm.roster);

            console.log('findOprs is done')
            vm.findAlt();
        }

        vm.findAlt = function () {
            vm.roster.splice(7, 0, vm.refArray[0]);
            vm.refArray = [];
        }
        console.log('this is the roster:', vm.roster);
        console.log('this is the remaining refArray', vm.refArray);
        vm.findHr()
    } //end find Roster 


    //gets the game in server posted by Game Controller/Service
    vm.getThisGame = function () {
        RosterService.getThisGame();
        console.log('RC getThisGame', RosterService.thisGame)
        vm.refArray = [];
    }; //end getThisGame

    //gets refs from DataBase
    vm.getRefs = function () {
        RosterService.getRefs();
        console.log('RC getRefs', RosterService.allRefs)
    };

    //saves roster to DataBase
    vm.saveRoster = function () {
        var rosterObj = {
            headref: vm.roster[0].derbyname,
            // ipr: vm.roster[1].derbyname,
            // jr1: vm.roster[2].derbyname,
            id: vm.thisGame.data[0].id,
        } //error "cannon read property of undefined" must have entry to work - figure out a way to fix this - maybe if empty/then null function
        RosterService.saveRoster(rosterObj)
        console.log('final roster', rosterObj);
        vm.getThisGame();
    }; //end saveRoster function
}); //end RosterController    
