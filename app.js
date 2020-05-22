var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

//statid files
app.use(express.static('./public'));

//fire controlers
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');