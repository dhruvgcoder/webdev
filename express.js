const express = require('express');
const app = express();

function isOldEnough(req,res,next){
    let age = req.query.age;
    if(age>14){
        next();
    }else{
        res.json({
            msg:"You are not old enough to watch this movies"
        })
    }
}

app.get('/moviename', isOldEnough ,function(req,res){
        res.json({
            id:"nf_1344",
            movie_name : "breaking bad"
        })
})


app.listen(3000,function(){
    console.log("Server Started Successfuly on Port 3000")
});