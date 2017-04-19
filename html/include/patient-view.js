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
    x = document.getElementsByClassName("patientProfile");
    for (i = 0; i < x.length; i++) {
        x[i].href = "/patient/" + patientInfo.id + "/profile";
    }
    x = document.getElementsByClassName("patientMessages");
    for (i = 0; i < x.length; i++) {
        x[i].href = "/messages/" + patientInfo.id ;
    }
    i = 1;
    patientInfo.tasks.forEach(function (ele) {
        var liNode = document.createElement("li");
        var buttonNode = document.createElement("button");
        buttonNode.id = 'Task' + i;
        buttonNode.type = 'button';
        buttonNode.className = "btn btn-default btn-block";
        var iNode = document.createElement('i');
        if (ele.status) {
            iNode.className = 'fa fa-square-o';
        } else {
            iNode.className = "fa fa-check-square";
        }
        buttonNode.appendChild(iNode);
        var taskName = document.createTextNode(' ' + ele.name);
        var bNode = document.createElement('b');
        bNode.appendChild(taskName);
        buttonNode.appendChild(bNode);
        liNode.appendChild(buttonNode);
        liNode.onclick = function () {
            if (confirm('Is ' + ele.name + ' complete?')) {
                liNode.firstElementChild.firstElementChild.className = "fa fa-check-square";
            } else {
                liNode.firstElementChild.firstElementChild.className = "fa fa-square-o";
            }
        };
        i++;
        document.getElementById('taskCollection').appendChild(liNode);
    });
});