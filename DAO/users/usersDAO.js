/*
 * Created by Click Lab
 */

var DaoManager = require('../DaoManager');

var models = require('../../models');

var async = require('async');

var userInsert = function(data,callback)
{
    //console.log(models.users);
    DaoManager.setData(models.users,data,callback)
};

var userDetails  = function(callback)
{
    DaoManager.getData(models.users,callback)
}

module.exports ={
    userInsert:userInsert,userDetails:userDetails
}