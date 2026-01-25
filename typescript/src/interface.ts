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

interface Report {
    report_id : number,
    report_summary : string
}

interface BugReport {
    id : number ;
    description : string;
    report ?: Report ; // We defined report as type
    solved : boolean ;
    time ?: Date;  // ?: is used for optional data

}

function BugCheck(data : BugReport){
    return data.solved ;
}

const bugInfo = {
    id : 27362,
    description : "issue in payment page",
    solved : true
}

let bugSolved = BugCheck(bugInfo)
console.log(bugSolved)