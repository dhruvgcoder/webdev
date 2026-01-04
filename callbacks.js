//Callbacks and Async Fn
const fs = require("fs");

function print(err , data){
    console.log(data);
}

fs.readFile("a.txt","utf-8",print);

fs.readFile("b.txt","utf-8",print);

console.log("Done");

console.log("<----Callbacks---->")

function print(){
    console.log("Payment Succesful");
}
setTimeout(print,1000); 
console.log("Waiting for payment....");
let c = 0;
for(let i = 0; i<1000000000;i++){
    c = c +i;
}
console.log("Expensive Operation Done"); 