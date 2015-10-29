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

var userUpdate  = function(datauserid,dataupdate,callback)
{
    DaoManager.updateData(models.users,datauserid,dataupdate,callback)
}

var userDelete  = function(datauserid,callback)
{
    DaoManager.deleteData(models.users,datauserid,callback)
}


var currentuserDetails = function(userdata,callback)
{

    var conditionQuery= {_id:userdata.userId};
 //var    projections = {userId: 1, name: 1};
    DaoManager.getCurrentUserData(models.users,conditionQuery,callback)


}
module.exports = {
    userInsert:userInsert,userDetails:userDetails,userUpdate:userUpdate,userDelete:userDelete,currentuserDetails:currentuserDetails
}