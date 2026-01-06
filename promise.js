function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}
function callbackFn(){
    console.log("you waited 5s")
}
setTimeoutPromisified(5000).then(callbackFn)


