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
setTimeout(print,1000); // pushed to callback que from web api after 1 sec 
console.log("Waiting for payment....");// not picked by callback stack until loop is running  

let c = 0;
for(let i = 0; i<1000000000;i++){
    c = c +i;
}
console.log("Expensive Operation Done"); // callback stack clear after logging this