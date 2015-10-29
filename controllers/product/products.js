/*
 * Created by Click lab
 */

var async = require('async');

var DAO = require('../../DAO');


var mongoose = require('mongoose');

var insertproduct = function(data,callbackRoute)
{
    async.waterfall([
        function(callback)
        {

           DAO.productDAO.productInsert(data,callback)
           //return callbackRoute(null,"adadad");
        }
    ],function(error,results)
        {
            if(error) {
                return callbackRoute(error);
            }
            else {
                return callbackRoute(null,results);

            }
        });

}


var getproducts = function(callbackRoute)
{
    async.waterfall([
        function (callback)
        {
        DAO.productDAO.productDetails(callback)
        }
    ],function(error,results)
        {
            if(error)
            {
                return callbackRoute(error);
            }
            else
            {
                return callbackRoute(results);
            }
        });
}
/*

var updateuser = function(datauserid,dataupdate,callbackRoute)
{
    async.waterfall([
        function(callback)
        {
          //  console.log(datauserid,dataupdate);

            DAO.userDAO.userUpdate(datauserid,dataupdate,callback)
        }
    ],function(error,result){

        if(error) {
            return callbackRoute(error);
        }
        else {
            return callbackRoute(null,results);

        }

    });
}

var deleteuser = function(requestuserid,callbackRoute)
{
    async.waterfall([
        function(callback)
        {
            DAO.userDAO.userDelete(requestuserid,callback)
        }
    ],function(error,results){
        if(error)
        {
            return callbackRoute(error);
        }
        else
        {
            return callbackRoute(results);
        }
    });

}
*/

module.exports= {insertproduct:insertproduct,getproducts:getproducts};

