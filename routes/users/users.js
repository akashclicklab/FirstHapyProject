/*
 * Created by Click lab
 */

var Joi = require('joi');
var controller = require('../../controllers');
var util = require('../../Utilities/util');

var userlist= {
    method:'GET',
    path :'/userlist',
    config:{
        description:"Get All User Details",
        tags: ['api', 'Api User List'],
        handler:function(error,reply)
        {
controller.user.getusers(function(error,success) {
    if (error) {
        reply(error);
    }
    else {
        reply(success);
    }

});
          //  console.log("Inside");
           // reply("Ok Inside Route user list");
        },
        plugins: {
            'hapi-swagger': {
                responseMessages: [
                    {code: 200, message: 'OK'},
                    {code: 400, message: 'Bad Request'},
                    {code: 401, message: 'Invalid Access Token'},
                    {code: 404, message: 'Customer Not Found'},
                    {code: 500, message: 'Internal Server Error'}
                ]
            }
        }
    }
}


/****** Get single user details ******/
var getcurrentusersdetails= {
    method:'POST',
    path :'/userdetails',
    config:{
        description:"get current  users details",
        handler:function(data,reply)
        {
            controller.user.getcurrentusersdetails(data.query,function(error,success) {
                if (error) {
                    reply(error);
                }
                else {
                    reply(success);
                }

            });
            //  console.log("Inside");
            // reply("Ok Inside Route user list");
        }
    }
}



var userinsert= {
    method:'POST',
    path :'/userinsert',
    config:{
        description:"insert users",
        handler:function(data,reply)
        {
            controller.user.insertuser(data.query,function(error,success) {
                if (error) {
                    reply(error);
                }
                else {
                    reply(success);
                }

            });
            //  console.log("Inside");
            // reply("Ok Inside Route user list");
        },
        validate: {


         payload: {
         email : Joi.string().email().trim().required(),

             password : Joi.string().required().min(6).max(10)
         },
         /*failAction : function(data, reply, source, error) {
      //   console.log("Inside error");
       //  console.log(data.payload);

          reply({ message: error.output.payload.message });



         }*/
            failAction: util.failActionFunction
         },
    }
}





var userUpdate = {
    method:"POST",
    path:"/userupdate",
    config:{
        description:"User Update",
        handler:function(data,reply)
        {
            console.log(data.query.user_id);
            controller.user.updateuser(data.query.user_id,data.query.update,function(error,success)
            {
                if(error)
                {
                    reply(error);
                }
                else
                {
                    reply(success);
                }
            });
          //  reply(data.query);
        }
    }
}

var userDelete = {

    method:"DELETE",
    path:"/userdelete",
    config:{

        description : "Delete user",
        handler:function(data,reply)
        {
            controller.user.deleteuser(data.query.user_id,function(error,success)
            {
                if(error)
                {
                    reply(error);
                }
                else
                {
                    reply(success);
                }
            });
        }
    }
}
var dataall = [userlist,userinsert,userUpdate,userDelete,getcurrentusersdetails];
module.exports=dataall;

