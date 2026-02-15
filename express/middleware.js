const express = require("express");
const app = express();

let requestCount = 0;

app.use(function(req,res,next){
    requestCount += 1;
    next();
});

app.get("/user",function(req,res){
    res.status(200)
        .json({
            name : "Dhruv G"
    })
})

app.post("/user",function(req,res){
    res.status(200)
        .json({
            msg : "new user created"
    })
});

app.get("/count",function(req,res){
    res.status(200)
    .json({requestCount})
});

app.listen(3002);
