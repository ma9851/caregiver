
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
    var objJson = {
        "patients": ["John Doe","Jane Doe","Bob","dan","phil"]
    };
    return objJson;
};
exports.teamlist = thelist();
exports.patientList = patientlist();