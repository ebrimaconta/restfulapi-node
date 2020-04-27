var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/userListModel'), 
  bodyParser = require('body-parser');
  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Userdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/userListRoutes'); 
routes(app); 

app.get('/', (req, res) => {
    res.send('Working').status(200);
 });

app.listen(port);


console.log('user app RESTful API server started on: ' + port);