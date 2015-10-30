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


exports.update = function (model, conditions, update, options, callback) {
    model.update(conditions, update, options, function (err, result) {

        if (err) {
            console.log(err);
            //logger.error("Update Query: ", err);
            return callback(err);
        }
       // logger.trace("Update Result: ", JSON.stringify(result));
        return callback(null, result);

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


exports.deleteData = function(model,requestid,callback)
{
    //console.log("dsfdsf");

    //console.log(requestid);
    model.remove(
        {_id:requestid},
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


    /*    model.find({products: {$elemMatch: {userId:'5630a6c0d9d32ff90144f3d6'}}},function(err,data)
    {
        if(err)
        {
            return callback(err);
        }
        //console.log("result");
        // console.log(data);
        return callback(null,data);

    })*/



      model.find(condition)
          .populate('products')
          .exec(function(err, foundUser){
          console.log("RESPONSE");
          console.log(err);
          console.log("RESPONSE1");
          console.log(foundUser);
        if(err){
           throw err; //do something with error
        } else {
           callback(foundUser);
        }
    });



}

