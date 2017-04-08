var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use(express.static('./html'));
var test_data = require('./model/homeTestData');

// This responds with "Hello World" on the homepage
router.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send("HELLO WORLD");
});

router.get('/login',function(req,res){
    res.sendfile('./html/loginForm.html')
});

app.post('/loginForm', function (req, res) {
    response = {
        username:req.body.username,
        password:req.body.password
    };

    if(response.username == 'caregiver' && response.password == 'password'){
        res.sendfile('./html/caregiverOverview.html')
    }else{
        res.send('Login Failed')
    }
});

app.post('/addPatient',function(req,res){
    var response ={
      name:req.body.username
    };
    test_data.patientList.push(response.name);
    res.send(test_data.patientList)
});

app.post('/removePatient',function(req,res){
    var response ={
        name:req.body.username
    };
    var index = test_data.patientList.indexOf(response.name);

    if (index > -1) {
        test_data.patientList.splice(index, 1);
    }

    res.send(test_data.patientList)
});


app.listen(8888, function () {
    console.log("Example app listening at http://localhost:8888");
});

module.exports = app;