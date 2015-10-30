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



var getcurrentusersdetails = function(userdata,callbackRoute)
{
    async.waterfall([
        function (callback)
        {
            DAO.userDAO.currentuserDetails(userdata,callback)
        }

    ],
    function(error,results)
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


module.exports= {insertuser:insertuser,getusers:getusers,updateuser:updateuser,deleteuser:deleteuser,getcurrentusersdetails:getcurrentusersdetails};

