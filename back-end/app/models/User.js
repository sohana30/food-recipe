var mongoose = require('mongoose');
var plm  = require('passport-local-mongoose'); //controls communication between passprt n mongoose

//credentials exists or not
var userSchema = new mongoose.Schema({
    username:{type:String, required:[true, 'need to provide a username!']}, //flash messaging without a module
    email:{type:String, required:[true, 'need to provide a valid email!']}
});

//credentials match or not
var options = ({missingUsernameError: "Wrong Username", missingPasswordError: "Incorrect Password"});//flash msging for options
userSchema.plugin(plm,options);

module.exports = mongoose.model('User', userSchema);