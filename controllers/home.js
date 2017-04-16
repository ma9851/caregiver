var template = require('../../../../../Desktop/caregiver/Views/main-template');
var test_data = require('../../../../../Desktop/caregiver/model/homeTestData');

//Some building stuff for the HTML page
exports.get = function(req, res) {
    var teamlist = test_data.teamlist;
    var strTeam = "";
    for (var i = 0; i < teamlist.count;) {
        strTeam = strTeam + "<li>" + teamlist.members[i]+ "</li>";
        i = i + 1;
    }
    strTeam = "<ul>" + strTeam + "</ul>";
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write( build_webpage(teamlist,strTeam) );
    res.end();
};

//This is where the majority of the HTML for the page should go
function build_webpage(teamlist,strTeam){
    var homePage = template.build(
        "Hello there",
        "<p>The teams members in Team " + teamlist.GroupName + ":</p>" + strTeam);
    return homePage
};