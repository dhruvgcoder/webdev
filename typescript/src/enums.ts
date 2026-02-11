
enum UserResponse { 
    No = 0 , // distinct value 
    Yes = 1
}

function response(message: UserResponse){
    return message;
}

let userResponse = response(UserResponse.Yes)
console.log(userResponse)

//String enums 

enum Direction {
    Up = "UP",
    Down = "DOWN" ,
    Left = "LEFT",
    Right = "RIGHT"
}

function doSomething(keypress: Direction){
    //do something
}

doSomething(Direction.Up)

enum BooleanLikeHeterogenousEnum{
    No = 0 ,
    Yes = "YES"
}

enum PromiseStatus {
    pending = "Pending" ,
    resolved = "Resolved" ,
    rejected = "Rejected"
}
// Common usecase 

// enum ResponseStatus {
//     Success = 200 ,
//     NotFound = 404 ,
//     Error = 500
// }

// app.get('/',(req,res)=>{
//     if(!req.query.userId){
//         res.status(ResponseStatus.Error).json({})
//     }
//     else {
//         res.status(ResponseStatus.Success).json({
//             msg : "Welcome xyz"
//         })
//     }
// })