interface UserType {
    firstname : string ,
    lastname : string ,
    age : number
}

function UserAge(user: UserType){
    console.log(user.age)
}

UserAge({
    firstname : "dhruv",
    lastname : "gupta",
    age : 21})

    