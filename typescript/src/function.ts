// Interfaces with functions 

interface Person {
    name : string;
    age : number;
    greet : () => string;
    // greet(): string
}

let person: Person = { 
    name : "dhruv",
    age : 21,
    greet: () => {
        return "hi"
    }
}
let greeting = person.greet()
console.log(greeting)