
//Some Dummy Data
var thelist = function() {
    var objJson = {
        "GroupName": "The Other Guys",
        "count": 5,
        "members": ["mike","doug","george","brian","justin"]
    };
    return objJson;
};

var patientlist = function() {
    var patientList= ["John Doe","Jane Doe","Bob","dan","phil"];
    return patientList;
};

var loginUsers = function(){
    var loginAccounts = {
        "caregivers" : [{'username':'caregiver1','password':'password1'}],
        "patients":[{'username':'patient0','password':'password0'}]
    };
    return loginAccounts;
};

exports.teamlist = thelist();
exports.patientList = patientlist();
exports.loginUsers = loginUsers();