var app = require('./app.js');
var test_data = require('../model/homeTestData');

exports.get = function(req,res){
  var validUsers = testData.loginUsers;
};

module.exports = {

  validateUser: function(){
    if(response.username == 'caregiver' && response.password == 'password'){
      res.sendfile('./html/caregiverOverview.html')
    }else{
      res.send('Login Failed')
    }
  }



};