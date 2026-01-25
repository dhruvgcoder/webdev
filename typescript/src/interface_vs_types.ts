// interface vs types 

// create two types Customer and Admin

// create a function that takes either a customer or admin as input 
// and returns a string saying "Welcolme [name]"



interface Customer {
    name: string;
    permissions: string;
}

interface Admin {
    name: string;
    age: number;
}
type CustomerOrAdmin = Customer | Admin

function greet(user: CustomerOrAdmin){
    return "Welcome " + user.name;
}

let data: CustomerOrAdmin = {
    name: "dhruv xyz",
    age: 21
}
let greetings = greet(data);
console.log(greetings)


// we cannot join or intersect interfaces directly on top level
// but can do like this 

interface Mac {
    model: string | number;
    desctiption: number & string;
}