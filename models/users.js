/*
 * Created by Click Lab
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema({
    email:{type:String,unique:true,required:true},
    fullname:{type:String,unique:false},
    phoneNumber:{type:String,unique:false},
    password:{type:String,required:true},
    status:{type: Number, default: 0 },
    createdAt:{type:Date}

});

module.exports = mongoose.model('users',users);