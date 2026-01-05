const fs = require("fs")

const contents = fs.readFileSync("a.txt","hex")

const buffer = Buffer.from(contents,"hex") // playing around encoding-decoding
const decode = buffer.toString("utf-8")

console.log(contents)
console.log(decode)

var user = {
    age : 21,
    name : 'dhruv',
    course: function(){ //course is a function inside an object
        return "cohort";
    }

}

console.log(user.course())

