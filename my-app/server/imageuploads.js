module.exports = function(app,formidable){
    console.log("uploads started");
    app.post('/api/upload', ( req , res ) => {
        var form = new formidable.IncomingForm({uploadDir:'./userimages'});
        form.keepExtensions = true;

        form.on('error',function(err){
            throw err;
            res.send({
                result:"failed",
                data:{},
                numberofimages:0,
                message:"cannot uplaod images. Error is :" +err
            });
        });

        form.on ('fileBegin', function(name,file){
            //rename the incoming file to the files name
            file.path = form.uploadDir + '/' + file.name
        });

        form.on('file',function(field,file){
            res.send({
                result:'ok',
                data:{'filename':file.name,'size':file.size},
                numberofimages:1,
                message:"upload successful"
            })
        })

        form.parse(req);
    })
}