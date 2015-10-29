/*
 * Created By Click lab
 */

/* Insert Data */

exports.setData = function(model,data,callback)
{
   // console.log(model);
   //return callback(model);
    new model(data).save(function (err, resultData) {

        if (err) {
           // logger.error("SET DATA: ", err);
        //    console.log("error");
        console.log(err);
            return callback(err);
        }

        var result = resultData.toObject();
        //delete result.__v;
       //console.log("result");
     //   console.log(result);
        callback(null, result);

    });


};

/* get Data */

exports.getData= function(model,callback)
{

     model.find(function(err,data)
        {
            if(err)
            {
                return callback(err);
            }
            //console.log("result");
           // console.log(data);
                return callback(null,data);

        }
    )
}


exports.updateData= function(model,datauserid,dataupdate,callback)
{

    //callback(dataupdate);

    console.log(dataupdate);
   model.update(
        {_id:datauserid},
        {$set:dataupdate},
    {}, // options
    function(err, object)
    {
        if (err){
            return callback(err);
            console.warn(err.message);  // returns error if no matching object found
        }else{
            console.dir(object);
            return callback(object);
        }
    });
}


exports.deleteData = function(model,requestuserid,callback)
{
    model.remove(
        {_id:requestuserid},
        function(err,resultData)
        {
            if(err)
            {
                callback(err);
            }

            callback(null, resultData);
        }
    )
}


/* get current user Data */

exports.getCurrentUserData= function(model,condition,callback)
{

    //var products = mongoose.model('products', products);

    model.findOne(condition)
    .populate('userId')
    .exec(function(err, foundUser){
        if(err){
            throw err; //do something with error
        } else {
           callback(foundUser);
        }
    });

   /* model.find(condition,function(err,data)
        {
            if(err)
            {
                return callback(err);
            }
            //console.log("result");
            // console.log(data);
            return callback(null,data);

        }
    )*/
}

