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
   // DaoManager.getData(models.products,callback)
    var conditionQuery= {};
    //var    projections = {userId: 1, name: 1};
    DaoManager.getProductData(models.products,conditionQuery,callback)



}

var userUpdate  = function(datauserid,dataupdate,callback)
{
    DaoManager.updateData(models.users,datauserid,dataupdate,callback)
}


var productDelete  = function(dataproductid,callback)
{
    //console.log("dsfsd");
    DaoManager.deleteData(models.products,dataproductid,callback)
}




module.exports = {
    productInsert:productInsert,productDetails:productDetails,productDelete:productDelete
}