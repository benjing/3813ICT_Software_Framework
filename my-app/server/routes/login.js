module.exports = function(app,db){
    console.log("login started")
    console.log(db.collection("groups").find({}));
    // db.open(function(err,db){
    //     var collection = db.collection("test1");
    //     collection.insert({name:"ben"})
    // })
    db.collections(function(err, collections){
        console.log(err);
        console.log(collections);
    });
    app.post('/api/auth', ( req , res ) => {
        

    })
}