$(function () {
    if (window.location.toString().match(/\/messages\/(\w+)/g) === null) {
        var first = $('#conversation-list').children()[1];
        $(first).addClass('active');
        $('#active-conversation-name').text($(first).children()[0].innerHTML.replace(/<.*>\s*/g, ""));
    } else {
        var patientID = window.location.toString().match(/\/messages\/(\w+)/g).toString().replace("/messages/", "");
        var messageRef = $('#' + patientID);
        messageRef.addClass('active');
        $('#active-conversation-name').text(messageRef.children()[0].innerHTML.replace(/<.*>\s*/g, ""));
    }
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
    var name = document.getElementById("active-conversation-name").innerText;
    var patientMessages;
    var caregiverResponse;
    if (name === 'John Doe') {
        patientMessages = messagesJohnDoe;
        caregiverResponse = messagesCaregiverJohnDoe;
    } else if (name === 'Bill Smith') {
        patientMessages = messagesBillSmith;
        caregiverResponse = messagesCaregiverBillSmith;
    } else if (name === 'Jane Doe') {
        patientMessages = messagesJaneDoe;
        caregiverResponse = messagesCaregiverJaneDoe;
    } else if (name === 'Karry Forya') {
        patientMessages = messagesKarryForya;
        caregiverResponse = messagesCaregiverKarryForya;
    } else {
        patientMessages = [];
        caregiverResponse = [];
    }
    var myDiv = document.getElementById("conversation");
    while (myDiv.firstChild) {
        myDiv.removeChild(myDiv.firstChild);
    }
    for (var i = 0; i < patientMessages.length; i++) {
        var chatBubbleDiv = document.createElement("div");
        chatBubbleDiv.setAttribute('class', "message-bubble");
        var chatBubbleName = document.createElement("p");
        chatBubbleName.setAttribute("class", "text-muted");
        chatBubbleName.append(name);
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
    document.getElementById('sendMessage').value = "";
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

function checkSendMessage(e) {
    if (e && e.keyCode === 13) {
        sendMessage(document.getElementById('sendMessage').value);
    }
}
