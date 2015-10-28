/*
 * Created by Click lab
 */

var async = require('async');

var DAO = require('../../DAO');


var mongoose = require('mongoose');

var insertuser = function(data,callbackRoute)
{
    async.waterfall([
        function(callback)
        {

           DAO.userDAO.userInsert(data,callback)
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


var getusers = function(callbackRoute)
{
    async.waterfall([
        function (callback)
        {
        DAO.userDAO.userDetails(callback)
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

module.exports= {insertuser:insertuser,getusers:getusers};

