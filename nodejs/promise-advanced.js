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

// PROMISE.ALLSETTLED
// Waits for ALL promises to settle and returns their results
// Never rejects, returns array with status and value/reason for each


function task1() {
  return new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
}

function task2() {
  return new Promise((reject) =>
    setTimeout(() => reject("Task 2 error"), 1500)
  );
}

function task3() {
  return new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 500));
}

Promise.allSettled([task1(), task2(), task3()]).then((results) => {
  console.log("All settled results:");
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`  Task ${index + 1}: ✓ ${result.value}`);
    } else {
      console.log(`  Task ${index + 1}: ✗ ${result.reason}`);
    }
  });
});
//  USE CASES 

// 1. Timeout Pattern with Race
function fetchWithTimeout(url, timeout = 5000) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timeout")), timeout)
  );

  return Promise.race([fetchPromise, timeoutPromise]);
}

// 2. Retry with Any
function retryOperation(operation, maxAttempts = 3) {
  const promises = Array(maxAttempts)
    .fill(null)
    .map(() => operation());

  return Promise.any(promises).catch(() => {
    throw new Error(`Operation failed after ${maxAttempts} attempts`);
  });
}

// 3. Aggregating Results with AllSettled
async function processMultipleAPIs(urls) {
  const promises = urls.map((url) => fetch(url).then((r) => r.json()));
  const results = await Promise.allSettled(promises);

  return results.map((result) => ({
    success: result.status === "fulfilled",
    data: result.value,
    error: result.reason,
  }));
}

console.log("Promise patterns loaded successfully!");


