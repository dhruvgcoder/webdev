abstract class User {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract greet(): string
    hello(){                // it is similar to interface but in abstract class
        console.log("hello")    // we can define functions like this hello() fn.
    }
}

class Data extends User{
    name: string;
    constructor(name: string){
        super(name);
        this.name = name;
    }
    greet(){
        return "hi" + this.name;
    }
}