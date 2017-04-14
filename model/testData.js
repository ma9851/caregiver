var patientListRAW = ["John Doe","Jane Doe","Bill Smith","Elvis Pretzel","John Lemon","Bob Hewert"];

function addPatient(name){
    patientListRAW.push(name);
}

function removepatient(name){
    var index = patientListRAW.indexOf(name);
    if (index > -1) {
        patientListRAW.splice(index, 1);
    }
}
