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
}*/

var productDelete = {

    method:"DELETE",
    path:"/productdelete",
    config:{

        description : "Delete product",
        handler:function(data,reply)
        {
           // console.log("dsf");
            controller.product.deleteproduct(data.query.product_id,function(error,success)
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
var dataall = [productinsert,productlist,productDelete];
module.exports=dataall;

