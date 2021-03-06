var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb+srv://test:test@todo-xb8bp.mongodb.net/test?retryWrites=true&w=majority'); 

//create a schema- this is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);
// var itemOne = Todo({item: 'buy flowers'}).save(function(err){
//     if (err) throw err;
//     console.log('item saved');
// })


// var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'some coding'}];

//parser the storing data- POST handler (middleware)
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){

app.get('/todo', function(req, res){
    //get data from mongodb and pass it to view
    Todo.find({} ,function(err, data){
        if (err) throw err;
        res.render('todo', {todos: data});
    });
    
});

app.post('/todo', urlencodedParser, function(req, res){
   
    data.push(req.body);
    res.json(data);
});

app.delete('/todo:item', function(req, res){
    data = data.filter(function(todo){
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
});

};