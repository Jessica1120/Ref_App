// encryption.js
var bcrypt = require('bcrypt'); //requires bcrypt
var SALT_WORK_FACTOR = 10; // variable for salting algorithm to use

var publicAPI = { 
  encryptPassword: function(password) {
      var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
      return bcrypt.hashSync(password, salt);
  }, // initial password encryption
  comparePassword: function(candidatePassword, storedPassword) {
      console.log('comparing passwords');
      console.log(candidatePassword, storedPassword);
      //ndidatePassword, this.password
      return bcrypt.compareSync(candidatePassword, storedPassword);
  } // 2nd part of password encryption
};

module.exports = publicAPI;