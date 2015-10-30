/*
 * Created by Click lab
 */

var async = require('async');

var DAO = require('../../DAO');


var mongoose = require('mongoose');

var insertproduct = function(data,callbackRoute)
{
    var retunresult;
    async.waterfall([
        function(callback)
        {

           DAO.productDAO.productInsert(data,callback)
           //return callbackRoute(null,"adadad");
        },

        function (result, callback) {
            //console.log(data.userId);
           // console.log(result._id);
             retunresult= result;
            var conditions = {
                _id: data.userId
            };
            productsId = result._id;
            var update = {
                $addToSet: {products: productsId}
            };
            DAO.userDAO.userUpdateproduct(conditions, update, callback);


        }
    ],function(error,data1)
        {
            console.log(retunresult);
            if(error) {
                return callbackRoute(error);
            }
            else {
                return callbackRoute(null,retunresult);

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
}*/

var deleteproduct = function(requestprodcutid,callbackRoute)
{
    async.waterfall([
        function(callback)
        {
            DAO.productDAO.productDelete(requestprodcutid,callback)
        },

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


module.exports= {insertproduct:insertproduct,getproducts:getproducts,deleteproduct:deleteproduct};

