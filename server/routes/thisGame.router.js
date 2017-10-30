var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

var thisGameId = [];

router.get('/:id', function(req, res) {
    thisGame = req.params.id
    thisGameId.push(thisGame)
    console.log('In Get this Game route', thisGame);
    console.log('thisGameId Array', thisGameId)
    pool.connect(function(connectionError, client, done){
        if(connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            var gQuery = 'SELECT * FROM games WHERE id=$1'
            var value = [thisGame]
            client.query(gQuery, value, function(queryError, resultObj){
                done();
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
