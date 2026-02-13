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

// PROMISE.ANY

function operation1() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Operation 1 failed"), 1000)
  );
}

function operation2() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Operation 2 succeeded"), 2000)
  );
}

function operation3() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Operation 3 failed"), 500)
  );
}

// Promise.any returns first fulfilled promise, ignoring rejections
Promise.any([operation1(), operation2(), operation3()])
  .then((result) => {
    console.log("First successful operation:", result); // "Operation 2 succeeded"
  })
  .catch((error) => {
    console.log("All operations failed:", error);
  });


