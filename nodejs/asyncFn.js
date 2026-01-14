// functional arguments 

function sum(a,b){ // Generic function
    return a+b
}
function sub(a,b){
    return a-b
}
function doOperation(a,b,ops){ // ops is functional argument , not a function
    return ops(a,b)
}

const ans = doOperation(1,2,sum)
console.log(ans)

//________________________________________//

// Async function used mainly for I/O bound operation

const fs = require('fs')

function read(err,data){
    console.log(data);
} 

const content1 = fs.readFile("a.txt","utf-8",read)
const content2 = fs.readFile("b.txt","utf-8",read)

console.log("Done....")



