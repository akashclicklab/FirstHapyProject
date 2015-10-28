/*
 * Created by Click lab
 */

var controller = require('../../controllers');

var userlist= {
    method:'GET',
    path :'/userlist',
    config:{
        description:"Get All User Details",
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
        }
    }
}

var dataall = [userlist,userinsert];
module.exports=dataall;

