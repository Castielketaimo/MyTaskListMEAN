//bring in express
var express = require('express');
//uses the Express Router
var router = express.Router();
//bring in mogojs
var mongojs = require('mongojs');
//craete a instance of db, second parameter is an array of collection we want to use
var db = mongojs('mongodb://castiel:z543521456.L@ds213199.mlab.com:13199/mytasklist_mean', ['tasks']);

//set the route for our home page
//request, respons, next
router.get('/tasks', function (req, res, next) {
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    })
});

//export so we can access it from other file
module.exports = router;