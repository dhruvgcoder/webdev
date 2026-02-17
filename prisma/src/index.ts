interface User {
    name:   String
    email:  String
    phone:  Number
    createdAt: Date
}

const User: User = {
    name: "Dhruv",
    email: "dhruvg@gmail.com",
    phone: 8888444400,
    createdAt: new Date
}

console.log(User)