var express = require('express');
var test_data = require('./model/homeTestData');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);
app.use(express.static('./html'));
app.use(express.static('./images'));
app.use(express.static('./css'));


//-------ROUTING-------//
router.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.sendfile('./html/landing.html');
});

router.get('/landing', function (req, res) {
    res.sendfile('./html/landing.html');
});

router.get('/new-user-type', function (req, res) {
    res.sendfile('./html/create-account-type.html');
});

router.get('/create-caregiver', function (req, res) {
    res.sendfile('./html/create-account-caregiver-form.html');
});

router.get('/overview', function (req, res) {
    res.sendfile('./html/caregiver/overview.html')
});

router.get('/profile', function (req, res) {
    res.sendfile('./html/caregiver/profile.html');
});

router.get('/messages', function (req, res) {
    res.sendfile('./html/caregiver/messages.html');
});

router.get('/schedule', function (req, res) {
    res.sendfile('./html/caregiver/schedule.html');
});

router.get('/emergency', function (req, res) {
    res.sendfile('./html/caregiver/emergency.html');
});

router.get('/patient/all', function (req, res) {
    res.sendfile('./html/caregiver/patient-list.html');
});

router.get('/patient/link', function (req, res) {
    res.sendfile('./html/caregiver/link-patient.html');
});

router.get('/patient/new', function (req, res) {
    res.sendfile('./html/create-account-patient-form.html');
});

router.get(/^\/patient\/(\w+)\/profile$/, function (req, res) {
    res.sendfile('./html/patients/profile.html');
});

router.get(/^\/patient\/(\w+)$/, function (req, res) {
    res.sendfile('./html/patients/view.html');
});


//-------POST REQUESTS-------//

app.post('/loginForm', function (req, res) {
    response = {
        username: req.body.username,
        password: req.body.password
    };

    if (response.username == 'caregiver' && response.password == 'password') {
        res.redirect('/overview')
    } else {
        res.send('Login Failed')
    }
});

app.post('/addPatient', function (req, res) {
    var response = {
        name: req.body.username
    };
    test_data.patientList.push(response.name);
    res.send(test_data.patientList)
});

app.post('/removePatient', function (req, res) {
    var response = {
        name: req.body.username
    };
    var index = test_data.patientList.indexOf(response.name);

    if (index > -1) {
        test_data.patientList.splice(index, 1);
    }

    res.send(test_data.patientList)
});


//-------SERVER LISTENING-------//

app.listen(8888, function () {
    console.log("Example app listening at http://localhost:8888");
});
