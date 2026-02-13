// PROMISE.RACE 

function slowOperation() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Slow operation completed"), 3000);
  });
}

function fastOperation() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fast operation completed"), 1000);
  });
}
function superFastOperation(){
    return new Promise ((resolve)=>{
        setTimeout(() => resolve("Superfast operation completed"),100)
    })
}
// Race between fast and slow - fast wins
Promise.race([slowOperation(), fastOperation(), superFastOperation()]).then((result) => {
  console.log("Race result:", result); 
});

