var patientList = ["John Doe", "Jane Doe", "Bill Smith", "Karry Forya"];

var patientListURLs = ["/patient/JohnDoe", "/patient/JaneDoe", "/patient/BillSmith", "/patient/KarryForya"];

var messagesJohnDoe = [
    "[4/15/2017 2:00pm]: I feel sick, i don't know if i can eat dinner today", "[4/16/2017 8:00am]: I am feeling better, Ill be ok to eat lunch"
];

var messagesCaregiverJohnDoe = [
    "[4/15/2017 2:05am]: I am coming to check up on you"
];

var messagesJaneDoe = [
    "[4/10/2017 5:00pm]: I need help getting into the bath", "[4/17/2017 10:00am]: Do I have a doctor appointment today?"
];

var messagesCaregiverJaneDoe = [
    "[4/15/2017 2:05am]: I am coming over now"
];

var messagesBillSmith = [
    "[3/6/2017 4:00pm]: I lost my house key, could you bring over my spare?", "[3/6/2017 4:10am]: Thank you!"
];

var messagesCaregiverBillSmith = [
    "[3/6/2017 4:05am]: Im heading over to your home now, be there in 10 minutes"
];

var messagesKarryForya = [
    "[3/6/2017 4:00pm]: I lost my house key, could you bring over my spare?", "[3/6/2017 4:10am]: Thank you!"
];

var messagesCaregiverKarryForya = [
    "[3/6/2017 4:05am]: Im heading over to your home now, be there in 10 minutes"
];

function addPatient(name) {
    patientList.push(name);
}

function removepatient(name) {
    var index = patientListRAW.indexOf(name);
    if (index > -1) {
        patientListRAW.splice(index, 1);
    }
}

