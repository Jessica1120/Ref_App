var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

router.get('/', function(req, res) {
    console.log('In GET/profile route');
    pool.connect(function(connectionError, client, done){
        if(connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM users WHERE id = 1', function(queryError, resultObj){
                done();
                if(queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('resultObj.rows', resultObj.rows[0]);
                    res.send(resultObj.rows[0]);
                } // end query else
            }) // end query
        } // end pool else
    }) //end pool function
}); // end get profile

router.put('/', function (req, res) {
    pool.connect(function (connectionError, client, done) {
        var update = req.body 
            console.log('req.body ->', req.body);
            if (connectionError) {
                console.log(connectionError);
                res.sendStatus(500);
            } else {
                if (update.derbyname !== undefined) {
                    var pQuery = 'UPDATE users SET derbyname=$1 WHERE id = 1'
                    var valueArray = [update.derbyname]
                }
                if (update.league !== undefined) {
                    var pQuery = 'UPDATE users SET league=$1 WHERE id = 1'
                    var valueArray = [update.league]
                }
                if (update.city !== undefined) {
                    var pQuery = 'UPDATE users SET city=$1 WHERE id = 1'
                    var valueArray = [update.city]
                }
                if (update.state !== undefined) {
                    var pQuery = 'UPDATE users SET state =$1 WHERE id = 1'
                    var valueArray = [update.state]
                }
                if (update.games_history !== undefined) {
                    var pQuery = 'UPDATE users SET games_history=$1 WHERE id = 1'
                    var valueArray = [update.games_history]
                }
                if (update.email !== undefined) {
                    var pQuery = 'UPDATE users SET email=$1 WHERE id = 1'
                    var valueArray = [update.email]
                }
                if (update.certifications !== undefined) {
                    var pQuery = 'UPDATE users SET certifications=$1 WHERE id = 1'
                    var valueArray = [update.certifications]
                }
                if (update.bio !== undefined) {
                    var pQuery = 'UPDATE users SET bio=$1 WHERE id = 1'
                    var valueArray = [update.bio]
                }
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


module.exports = router;