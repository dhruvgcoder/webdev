// Generics are language independent ( exits in c++ as well )

function identity<T>(arg: T): T{
    return arg;
}

let output1 = identity<string>("hello")
let output2 = identity<number>(12)

console.log(output1)
console.log(output2)

// Problem statement :  Let’s say you have a function that needs to return the first element of an array. 
// Array can be of type either string or integer

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement<string>(["harkiratSingh", "ramanSingh"]);
const x = getFirstElement<number>([11,22,33])
console.log(el.toLowerCase())
console.log(x)




