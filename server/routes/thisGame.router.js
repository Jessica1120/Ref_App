var router = require('express').Router();
var path = require('path');

var thisGame = []

router.post('/', function (req, res) {
    thisGame = [];
    console.log('in post sendThisGame:', req.body);
    thisGame.push (req.body);
    res.sendStatus(202);
})

 
router.get('/', function(req, res) {
    console.log('in this get Game', thisGame)
    res.send(thisGame);
}); //end get 


module.exports = router;
