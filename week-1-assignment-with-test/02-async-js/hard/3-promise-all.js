/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

// function printThing(){
//     console.log("I have waited for n second")
// }
// function waitOneSecond() {
//  return new Promise((resolve)=>{
//     setTimeout(resolve,1000)
//  })
// }

// function waitTwoSecond() {
//     return new Promise((resolve)=>{
//         setTimeout(resolve,2000)
//      })
// }

// function waitThreeSecond() {
//     return new Promise((resolve)=>{
//         setTimeout(resolve,3000)
//      })
// }
// function promiseall(){
//     waitOneSecond().then(waitTwoSecond().then(waitThreeSecond().then(printThing)))
// }

// function calculateTime() {

// }
function waitOneSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resolved after 1 second');
      }, 1000);
    });
  }
  
  function waitTwoSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resolved after 2 seconds');
      }, 2000);
    });
  }
  
  function waitThreeSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resolved after 3 seconds');
      }, 3000);
    });
  }
  
  function waitForAllPromises() {
    const start = Date.now();
  
    Promise.all([waitOneSecond(), waitTwoSeconds(), waitThreeSeconds()])
      .then((results) => {
        const end = Date.now();
        const totalTime = end - start;
        results.forEach((result, index) => {
          console.log(`Promise ${index + 1}: ${result}`);
        });
        console.log(`Total time taken: ${totalTime}ms`);
      })
      .catch((error) => {
        console.error('Error occurred:', error);
      });
  }
  
  // Example usage:
  waitForAllPromises();


//   NOTE: 
// const promise1 = Promise.resolve('First');
// const promise2 = Promise.resolve('Second');
// const promise3 = Promise.resolve('Third');

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results); // Output: ['First', 'Second', 'Third']
//   })
//   .catch((error) => {
//     console.error(error);
//   });
  