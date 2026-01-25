interface People {                     // interface is blueprint that everyone needs to follow
    name: string;
    age: number;
    isLegal(): boolean;
} 

class Lead implements People {         // class is implementation of blueprint
    name: string ;
    age: number ; 

    constructor(name: string , age: number){
        this.name = name;
        this.age = age;
    }
    isLegal(){
        return this.age > 18;
    }
}

let user1 = new Lead("dhruv",21)

console.log(user1.name + " " + user1.age)

isLegal(19);


// Inheritance of class

class Shape{
    area(){
        console.log("hi i am area")
    }
}

class Rectangle extends Shape{
    width: number;
    height: number;

    constructor(){
        super()             // points to constructor on parent class 
        this.width = 1;
        this.height = 2;
    }
}
const r = new Rectangle()
r.area()
