var express   = require('express');
var mongoose  = require('mongoose');
var employee  = require('./models/employee');
var employees = require('./controllers/employees');

var app = express();


app.get('/employees', employees.all);

var connect = function() {
  var options = {
    server: {
      socketOptions: {
        keepAlive: 1
      }
    }
  };
  mongoose.connect('mongodb://localhost/test')
}

connect();

//require('./routes/employees');

app.listen(3000);
console.log('Listening on port 3000....');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('open');
})
