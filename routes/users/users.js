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
        }
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

