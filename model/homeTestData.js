
var patientlist = function() {
    var patientList= ["John Doe","Jane Doe","Bill Smith","Elvis Pretzel","John Lemon"];
    return patientList;
};

var loginUsers = function(){
    var caregiverLogins = [['caregiver','password'],['caregiver1','password1']];
    return caregiverLogins;
};



exports.patientList = patientlist();
exports.loginUsers = loginUsers();