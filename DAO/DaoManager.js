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
        //  console.log(err);
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