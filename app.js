const express = require('express');
const mustache = require('mustache-express');
const data = require('./data');

const mongoClient = require('mongodb').MongoClient;

const app = express();

app.engine('mustache', mustache());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static('public'))

app.get('/', function(req, res) {
  console.log(data);
  db.collection('users').find({}).toArray(function(err, results){
    res.render('index',{users: results});
  });
});



app.get('/details/:id',function(req, res){
  db.collection('users').find({id:Number(req.params.id)}).toArray(function(err, results){
    console.log(results);
  res.render('details', results[0]);
  });
});



  // let foundUser = data.users.find(function(user){
  //   return user.id == req.params.id;
  // });
  // res.render('details', foundUser);



let db;

mongoClient.connect('mongodb://localhost:27017/user_directory', function(err, database){
  if(err){
    console.log(err);
  } else {
    db = database;
app.listen(2315, function() {
  console.log('Listening on port 2315.');
    });
  }
});
