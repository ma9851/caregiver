var express = require('express');
var test_data = require('./model/homeTestData');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

app.set('view engine', 'pug');
app.set('views', './html');

app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

app.use(express.static('./html'));
app.use(express.static('./images'));
app.use(express.static('./css'));
app.use(express.static('./model'));

//-------ROUTING-------//
router.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.render('landing');
});

router.get('/landing', function (req, res) {
    res.render('landing');
});

router.get('/new-user-type', function (req, res) {
    res.render('create-account/type');
});

router.get('/create-caregiver', function (req, res) {
    res.render('create-account/caregiver-form');
});

router.get('/overview', function (req, res) {
    res.render('caregiver/overview')
});

router.get('/profile', function (req, res) {
    res.render('caregiver/profile');
});

router.get('/messages', function (req, res) {
    res.render('caregiver/messages');
});

router.get(/^\/messages\/(\w+)$/, function (req, res) {
    res.render('caregiver/messages');
});

router.get('/schedule', function (req, res) {
    res.render('caregiver/schedule');
});

router.get('/emergency', function (req, res) {
    res.render('caregiver/emergency');
});

router.get(/^\/emergency\/(\w+)$/, function (req, res) {
    res.render('caregiver/emergency');
});

router.get('/patient/all', function (req, res) {
    res.render('caregiver/patient-list');
});

router.get('/patient/link', function (req, res) {
    res.render('caregiver/link-patient');
});

router.get('/patient/new', function (req, res) {
    res.render('create-account/patient-form');
});

router.get(/^\/patient\/(\w+)\/profile$/, function (req, res) {
    res.render('patients/profile');
});

router.get(/^\/patient\/(\w+)$/, function (req, res) {
    res.render('patients/view');
});

//-------POST REQUESTS-------//

app.post('/loginForm', function (req, res) {
    var response = {
        username: req.body.username,
        password: req.body.password
    };
    var caregiverAccounts = test_data.loginUsers;

    for (var accountIndex in caregiverAccounts) {
        var account = caregiverAccounts[accountIndex];
        if (response.username === account[0] && response.password === account[1]) {
            var login = true;
            break;
        }
    }
    if (login) {
        res.redirect('/overview')
    } else {
        res.redirect('/')
    }
});

app.post('/createNewCaregiver', function (req, res) {
    var response = {
        username: req.body.username,
        password: req.body.password
    };
    var newCaregiver = [response.username, response.password];
    test_data.loginUsers.push(newCaregiver);
    res.redirect('/');

});

app.post('/emergencySubmit', function (req, res) {
    var response = {
        name: req.body.name,
        reason: req.body.reason
    };
    console.log(req.body);
    res.send('You have declared an emergency for ' + response.name + ' for the following reason: ' + response.reason)
});

app.post('/emergencyCancel', function (req, res) {
    res.redirect('/overview')
});

//-------SERVER LISTENING-------//

app.listen(8888, function () {
    console.log("Example app listening at http://localhost:8888");
});
