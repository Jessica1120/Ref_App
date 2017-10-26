var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

router.put('/', function (req, res) {
    pool.connect(function (connectionError, client, done) {
        var update = req.body 
            console.log('updateRef req.body ->', req.body);
            if (connectionError) {
                console.log(connectionError);
                res.sendStatus(500);
            } else {
                if (update.headref !== undefined) {
                    var pQuery = 'UPDATE games SET headref=(SELECT (id) FROM users WHERE derbyname=$1), headref_name = $1 WHERE id=$2'
                    var valueArray = [update.headref, update.id]
                }
                if (update.ipr !== undefined) {
                    var pQuery = 'UPDATE games SET ipr=(SELECT (id) FROM users WHERE derbyname=$1), ipr_name = $1 WHERE id=$2'
                    var valueArray = [update.ipr, update.id]
                }
                if (update.jr1 !== undefined) {
                    var pQuery = 'UPDATE games SET jr1=(SELECT (id) FROM users WHERE derbyname=$1), jr1_name = $1 WHERE id=$2'
                    var valueArray = [update.jr1, update.id]
                }
                if (update.jr2 !== undefined) {
                    var pQuery = 'UPDATE games SET jr2=(SELECT (id) FROM users WHERE derbyname=$1), jr2_name = $1 WHERE id=$2'
                    var valueArray = [update.jr2, update.id]
                }
                if (update.opr1 !== undefined) {
                    var pQuery = 'UPDATE games SET opr1=(SELECT (id) FROM users WHERE derbyname=$1), opr1_name = $1 WHERE id=$2'
                    var valueArray = [update.opr1, update.id]
                }
                if (update.opr2 !== undefined) {
                    var pQuery = 'UPDATE games SET opr2=(SELECT (id) FROM users WHERE derbyname=$1), opr2_name = $1 WHERE id=$2'
                    var valueArray = [update.opr2, update.id]
                }
                if (update.opr3 !== undefined) {
                    var pQuery = 'UPDATE games SET opr3=(SELECT (id) FROM users WHERE derbyname=$1), opr3_name = $1 WHERE id=$2'
                    var valueArray = [update.opr3, update.id]
                }
                if (update.alt !== undefined) {
                    var pQuery = 'UPDATE games SET alt=(SELECT (id) FROM users WHERE derbyname=$1), alt_name = $1 WHERE id=$2'
                    var valueArray = [update.alt, update.id]
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