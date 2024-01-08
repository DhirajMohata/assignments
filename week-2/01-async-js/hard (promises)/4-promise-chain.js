/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve();
        } , t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve();
        } , t*1000);
    })
}

function wait3(t) {
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve();
        } , t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    var start = Date.now();
    return wait1(t1)
    .then(() => {
      // console.log("First Promise resolved");
      // Return the next method that returns a promise.
      return wait2(t2);
    })
    .then(() => {
      // console.log("Second Promise resolved");
      return wait3(t3);
    })
    .then(() => {
      // console.log("Third Promise resolved");
      // Record the end time of the complete operation.
      const end = Date.now();
      // Find the time difference and return it.
      const difference = end - start;
      return difference;
    });
}

module.exports = calculateTime;
