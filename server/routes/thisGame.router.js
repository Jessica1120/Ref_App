var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

var thisGame = []

router.post('/', function (req, res) {
    thisGame = [];
    console.log('in post sendThisGame:', req.body);
    thisGame.push (req.body);
    res.sendStatus(202);
})

 
// router.get('/', function(req, res) {
//     console.log('in this get Game', thisGame)
//     res.send(thisGame);
// }); //end get 

router.get('/', function(req, res) {
    console.log('In Get this Game route');
    pool.connect(function(connectionError, client, done){
        if(connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            var gQuery = 'SELECT * FROM games WHERE id=$1'
            var value = [thisGame[0].id]
            client.query(gQuery, value, function(queryError, resultObj){
                if(queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('experiment', resultObj.rows);
                        res.send(resultObj.rows);
                    }//end else
                }) //end 2nd query
            } //end pool else
        }) // end pool function
    }); //end get games function

module.exports = router;
