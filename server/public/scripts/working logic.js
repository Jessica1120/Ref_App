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
            if (1 > tempHr.length) {
                for (let i=0; i <vm.refArray.length; i++) {
                    if (1 == vm.refArray[i].hrRate) {
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