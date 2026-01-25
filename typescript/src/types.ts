type SumInput = string | number 

function typeFn(a: SumInput , b: SumInput){
    return {a,b}
}
console.log(typeFn("hello",21))

interface Employee {
    name : string ;
    startDate : Date ;
}

interface Manager {
    name : string ;
    department : string ;
}

type TeamLead = Employee & Manager

const teamLead : TeamLead = {
    name : "dhruv",
    startDate : new Date(),
    department : "cknenc"
}

console.log(teamLead)



