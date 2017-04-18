$(function () {
    var first = $('#conversation-list').children()[1];
    $(first).addClass('active');
    $('#active-conversation-name').text($(first).children()[0].innerHTML.replace(/<.*>\s*/g, ""));
    var objDiv = document.getElementById("conversation");
    objDiv.scrollTop = objDiv.scrollHeight;
    setConvo();
});
$('#conversation-list').find('> a').on('click', function (e) {
    e.preventDefault();
    $('#conversation-list').find('> a').removeClass('active');
    $(this).addClass('active');
    $('#active-conversation-name').text($(this).children()[0].innerHTML.replace(/<.*>\s*/g, ""));
    setConvo();
    var objDiv = document.getElementById("conversation");
    objDiv.scrollTop = objDiv.scrollHeight;
});
function setConvo() {
    var first = document.getElementById("active-conversation-name").innerText;
    var patientMessages;
    var caregiverResponse;
    if (first === 'John Doe') {
        patientMessages = messagesJohnDoe;
        first = 'John Doe';
        caregiverResponse = messagesCaregiverJohn;
    } else if (first === 'Bill Smith') {
        patientMessages = messagesBillSmith;
        caregiverResponse = messagesCaregiverJane;
    } else if (first === 'Jane Doe') {
        patientMessages = messagesJaneDoe;
        caregiverResponse = messagesCaregiverBill;
    } else {
        patientMessages = [];
        caregiverResponse = [];
    }
    var myDiv = document.getElementById("conversation");
    while (myDiv.firstChild) {
        myDiv.removeChild(myDiv.firstChild);
    }
    for (var i = 0; i < patientMessages.length; i++) {
        //var patientName = patientList[i];
        var chatBubbleDiv = document.createElement("div");
        chatBubbleDiv.setAttribute('class', "message-bubble");
        var chatBubbleName = document.createElement("p");
        chatBubbleName.setAttribute("class", "text-muted");
        chatBubbleName.append(first);
        chatBubbleDiv.appendChild(chatBubbleName);
        var chatBubbleMessage = document.createElement("p");
        chatBubbleMessage.append(patientMessages[i]);
        chatBubbleDiv.appendChild(chatBubbleMessage);
        if (i !== patientMessages.length - 1) {
            myDiv.appendChild(chatBubbleDiv);
            chatBubbleDiv = document.createElement("div");
            chatBubbleDiv.setAttribute('class', "message-bubble");
            chatBubbleName = document.createElement("p");
            chatBubbleName.setAttribute("class", "text-muted");
            chatBubbleName.append('Sarah');
            chatBubbleDiv.appendChild(chatBubbleName);
            chatBubbleMessage = document.createElement("p");
            chatBubbleMessage.append(caregiverResponse);
            chatBubbleDiv.appendChild(chatBubbleMessage);
        }
        myDiv.appendChild(chatBubbleDiv);
    }
}
function sendMessage(message) {
    var chatBubbleDiv = document.createElement("div");
    chatBubbleDiv.setAttribute('class', "message-bubble");
    var myDiv = document.getElementById("conversation");
    var chatBubbleName = document.createElement("p");
    chatBubbleName.setAttribute("class", "text-muted");
    chatBubbleName.append('Sarah');
    chatBubbleDiv.appendChild(chatBubbleName);
    var chatBubbleMessage = document.createElement("p");
    chatBubbleMessage.append(message);
    chatBubbleDiv.appendChild(chatBubbleMessage);
    myDiv.appendChild(chatBubbleDiv);
    var first = document.getElementById("active-conversation-name").innerText;
}