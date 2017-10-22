var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

router.get('/', function (req, res) {
    console.log('In Get Refs route');
    pool.connect(function(connectionError, client, done){
        if(connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM users', function(queryError, resultObj){
                done();
            if(queryError) {
                console.log(queryError);
                res.sendStatus(500);
            } else {
                console.log('resultObj.rows', resultObj.rows);
                res.send(resultObj.rows);
                } //end result else
            }) // end query
        } //end pool else
    }) // end pool function


router.put('/', function (req, res) {
    pool.connect(function (connectionError, client, done) {
        var roster = req.body 
            console.log('req.body ->', req.body);
            if (connectionError) {
                console.log(connectionError);
                res.sendStatus(500);
            } else {
                var pQuery = 'UPDATE games SET headref=(SELECT (id) FROM users WHERE derbyname=$1), ipr=(SELECT (id) FROM users WHERE derbyname=$2), jr1=(SELECT (id) FROM users WHERE derbyname=$3), jr2=(SELECT (id) FROM users WHERE derbyname=$4), opr1=(SELECT (id) FROM users WHERE derbyname=$5), opr2=(SELECT (id) FROM users WHERE derbyname=$6), opr3=(SELECT (id) FROM users WHERE derbyname=$7) WHERE id=$8'
                var valueArray = [roster.headref, roster.ipr, roster.jr1, roster.jr2, roster.opr1, roster.opr2, roster.opr3, roster.id];
                console.log('roster.headref', roster.headref)
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
    }) //end put

}); //end router

    module.exports = router;