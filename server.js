//getting modules from node modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//two files in a folder called routes
var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;

//main app
var app = express();

//View Engine
//let the system know what we gonna use for view path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//be able to render file with html extention
app.engine('html', require('ejs').renderFile);

//Set Static Folder - Where we put all the Angular stuff
app.use(express.static(path.join(__dirname, 'client')));

//Body Parsr MiddleWhere
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//create our routh
app.use('/', index);
app.use('/api', tasks);

//listen so we can run the app
app.listen(port, function() {
    console.log('Server statred on port ' + port)
});