//bring in express
var express = require('express');
//uses the Express Router
var router = express.Router();

//set the route for our home page
//request, respons, next
router.get('/tasks', function (req, res, next) {
    res.send('TASK API');
});

//export so we can access it from other file
module.exports = router;