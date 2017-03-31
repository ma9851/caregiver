/**
 * Created by Michael on 3/31/2017.
 */

//Handles page routing
var url = require('url');
var fs = require('fs');

exports.get = function(req, res) {
    req.requrl = url.parse(req.url, true);
    var path = req.requrl.pathname;
    if (/.(css)$/.test(path)) {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });
        fs.readFile(__dirname + path, 'utf8', function(err, data) {
            if (err) throw err;
            res.write(data, 'utf8');
            res.end();
        });
    } else {
        if (path === '/' || path === '/home') {
            require('./controllers/home').get(req, res);
        }else if(path === '/overview'){
            require('./controllers/caregiver_overview').get(req,res);
        }
    }
};
