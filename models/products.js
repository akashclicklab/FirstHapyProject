/*
 * Created by Click Lab
 */

var mongoose = require('mongoose');
//var users = require('users');
var Schema = mongoose.Schema;

var products = new Schema({
    name:{type:String,required:true},
    userId: {type: Schema.ObjectId, ref: 'users', required: true},
    location:{type:String,unique:false},
    status:{type: Number, default: 0 },
    createdAt:{type:Date}

});

module.exports = mongoose.model('products',products);