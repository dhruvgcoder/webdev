function setTimeoutPromisified(time){
    return new Promise(resolve => setTimeout(resolve,time))
}
function callbackFn(){
    console.log("you waited 10s")
}
setTimeoutPromisified(10000).then(callbackFn)