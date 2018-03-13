//bring in express
var express = require('express');
//uses the Express Router
var router = express.Router();

//set the route for our home page
//request, respons, next
router.get('/', function(req, res, next){
    res.send('INDEX PAGE');
});

//export so we can access it from other file
module.exports = router;