var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

router.get('/', function(req, res) {
    console.log('In Get Games route');
    pool.connect(function(connectionError, client, done){
        if(connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM games', function(queryError, resultObj){
                done();
                if(queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('resultObj.rows', resultObj.rows[0]);
                    res.send(resultObj.rows[0]);
                    } //end result else
                }) // end query
            } //end pool else
        }) // end pool function
    }); //end get games function

router.post('/', function(req, res) {
    var newGameObj = req.body;
        console.log('In Post Game route', req.body);
        pool.connect(function(connectionError, client, done){
            if(connectionError) {
                console.log(connectionError);
                res.sendStatus(500);
            } else {
                var gQuery = 'INSERT INTO games (date, location, team1, team2) VALUES ($1, $2, $3, $4)';
                var valueArray = [newGameObj.date, newGameObj.location, newGameObj.teamOne, newGameObj.teamTwo];
                client.query(gQuery, valueArray, function(queryError, resultObj) {
                    done();
                    if(queryError) {
                        console.log(queryError);
                        res.sendStatus(500);
                    } else {
                        console.log('game post successful');
                        res.sendStatus(202);
                    } //end result else
                }); //end query
            } //end pool else
        }) //end pool function
}) //end game post

module.exports = router;