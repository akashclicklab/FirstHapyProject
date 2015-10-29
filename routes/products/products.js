/*
 * Created by Click lab
 */

var controller = require('../../controllers');


var productlist= {
    method:'GET',
    path :'/productlist',
    config:{
        description:"Get All User Details",
        handler:function(error,reply)
        {
            controller.product.getproducts(function(error,success) {
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


var productinsert= {
    method:'POST',
    path :'/productinsert',
    config:{
        description:"insert productinsert",
        handler:function(data,reply)
        {
            controller.product.insertproduct(data.query,function(error,success) {
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


/*
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
} */
var dataall = [productinsert,productlist];
module.exports=dataall;

