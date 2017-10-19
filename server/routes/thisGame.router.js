var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

var thisGame = []

router.post('/', function (req, res) {
    thisGame = [];
    console.log('in this post Game:', req.body);
    thisGame.push (req.body);
    res.sendStatus(202);
})

router.put('/', function (req, res) {
    pool.connect(function (connectionError, client, done) {
        var roster = req.body 
            console.log('req.body ->', req.body);
            if (connectionError) {
                console.log(connectionError);
                res.sendStatus(500);
            } else {
                var pQuery = 'UPDATE games SET headref=$1, ipr=$2, jr1=$3, jr2=$4, opr1=$5, opr2=$6, opr3=$7 WHERE id=$8'
                var valueArray = [roster.headref, roster.ipr, roster.jr1, roster.jr2, roster.opr1, roster.opr2, roster.opr3, roster.id];
                console.log('valueArray:', valueArray)
                client.query(pQuery, valueArray, function (queryError, resultObj) {
                    done();
                    if (queryError) {
                        console.log(queryError);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(202);
                    } //end else
                }) //end query
            } //end pool else
        }) //end connect
    })
 
router.get('/', function(req, res) {
    console.log('in this get Game', thisGame)
    res.send(thisGame[0]);
}); //end get


module.exports = router;
