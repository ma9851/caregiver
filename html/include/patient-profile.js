$(function () {
    var jsonSTRING = '{"KarryForya":{"id":"KarryForya","name":"Karry Forya","date of birth":"03/22/1992","tasks":[{"name":"Dinner","status":true},{"name":"Give Night Medication","status":true},{"name":"Breakfast","status":false}],"details":[{"name":"First Name","value":"Karry"},{"name":"Last Name","value":"Forya"},{"name":"Address","value":"1 Example Rd"},{"name":"Phone","value":"555 555 5555"},{"name":"Email","value":"karryforya@example.com"}]},"JohnDoe":{"id":"JohnDoe","name":"John Doe","date of birth":"03/22/1992","tasks":[{"name":"Dinner","status":true},{"name":"Give Night Medication","status":true},{"name":"Breakfast","status":false}],"details":[{"name":"First Name","value":"John"},{"name":"Last Name","value":"Doe"},{"name":"Address","value":"1 Example Rd"},{"name":"Phone","value":"555 555 5555"},{"name":"Email","value":"johndoe@example.com"}]},"JaneDoe":{"id":"JaneDoe","name":"Jane Doe","date of birth":"01/17/1983","tasks":[{"name":"Lunch","status":true},{"name":"Dinner","status":true},{"name":"Give Morning Medicine","status":false},{"name":"Breakfast","status":false}],"details":[{"name":"First Name","value":"Jane"},{"name":"Last Name","value":"Doe"},{"name":"Address","value":"1 Example Rd"},{"name":"Phone","value":"444 444 4444"},{"name":"Email","value":"janedoe@example.com"}]},"BillSmith":{"id":"BillSmith","name":"Bill Smith","date of birth":"10/05/1892","tasks":[{"name":"Lunch","status":true},{"name":"Dinner","status":true},{"name":"Give Night Medicine","status":true},{"name":"Give Morning Medicine","status":false}],"details":[{"name":"First Name","value":"Bill"},{"name":"Last Name","value":"Smith"},{"name":"Address","value":"1 Example Rd"},{"name":"Phone","value":"333 333 3333"},{"name":"Email","value":"billsmith@example.com"}]}}';
    var allPatientInfo = JSON.parse('[' + jsonSTRING + ']');
    var patientID = window.location.toString().match(/\/patient\/(\w+)/g).toString().replace("/patient/", "");
    var patientInfo = allPatientInfo[0][patientID];
    document.title = patientInfo.name;
    var x = document.getElementsByClassName("patientName");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = patientInfo.name;
    }
    x = document.getElementsByClassName("patientBack");
    for (i = 0; i < x.length; i++) {
        x[i].href = "/patient/" + patientInfo.id;
    }
    i = 1;
    patientInfo.details.forEach(function (ele) {
        var liNode = document.createElement("li");
        var detailName = document.createTextNode(' ' + ele.name);
        var bNode = document.createElement('b');
        var detailValue = document.createTextNode(' ' + ele.value);
        bNode.appendChild(detailName);
        liNode.appendChild(bNode);
        liNode.appendChild(detailValue);
        i++;
        document.getElementById('detailCollection').appendChild(liNode);
    });
});
