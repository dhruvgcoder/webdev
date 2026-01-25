// Arrays in ts


function getMax(nums: number[]){
    let maxValue = -10000;

    for(let i=0 ; i<nums.length ; i++){
        if(nums[i]>maxValue){
            maxValue = nums[i];
        }

    }
    return maxValue;
}

let max = getMax([1,2,3,4])
console.log(max)


interface Owner{
    name: string;
    city: string;
    id: number;
}
interface Car{
    name: string;
    owner: Owner[]
}

let carDetail: Car = {
    name: "BMW",
    owner: [
        {name:"Josh",city:"Berlin",id:1}, // 1st owner
        {name:"Kirat",city:"Chandigarh",id:2} // 2nd owner 
    ]
}

// Assignment - check who is above 18 from array of users

interface UserRecord {
    firstname: string;
    lastname: string;
    age: number;
}

function isLegal(users: UserRecord[]){
    let ans = []
    for(let i=0 ;i<users.length;i++){
        if(users[i].age>18){
            ans.push(users[i])
        }
    }
    return ans;
}

let users =  isLegal([
        {firstname: "Dhruv",lastname: "Gupta",age:21},
        {firstname: "Keshav", lastname: "Sharma" , age: 14},
        {firstname: "Hkirat", lastname: "Singh" , age: 25 }
])

console.log(users)



