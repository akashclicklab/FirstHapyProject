/*
 * Created by Click Lab
 */

var DaoManager = require('../DaoManager');

var models = require('../../models');

var async = require('async');

var productInsert = function(data,callback)
{
    //console.log(models.users);
    DaoManager.setData(models.products,data,callback)
};

var productDetails  = function(callback)
{
    DaoManager.getData(models.products,callback)
}

/*var userUpdate  = function(datauserid,dataupdate,callback)
{
    DaoManager.updateData(models.users,datauserid,dataupdate,callback)
}

var userDelete  = function(datauserid,callback)
{
    DaoManager.deleteData(models.users,datauserid,callback)
}
*/
module.exports = {
    productInsert:productInsert,productDetails:productDetails
}