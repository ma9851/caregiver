var template = require('../views/main-template');
var test_data = require('../model/homeTestData');

//Some building stuff for the HTML page
exports.get = function(req, res) {
    var patientList = test_data.patientList;
    var strPatients = "";
    for (var i = 0; i < patientList.patients.length;) {
        strPatients = strPatients + "<li>" + patientList.patients[i]+ "</li>";
        i = i + 1;
    }
    strPatients = "<ul>" + strPatients + "</ul>";
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write( build_webpage(strPatients) );
    res.end();
};

//This is where the majority of the HTML for the page should go
function build_webpage(strPatients){
    var caregiverOverview = template.build(
        "Hello there",
        "<p>Your Current Patients are:" + strPatients);
    return caregiverOverview;
};