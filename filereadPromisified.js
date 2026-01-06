const fs = require("fs")

function FilereaderPromisified(filename){
    return new Promise( (resolve) => fs.readFile(filename,"utf-8",(err,data)=>{
        if(data){
            resolve(data);
        }
    }))
}

function content(data){
    console.log(data)
    
}

FilereaderPromisified("a.txt").then(content)

