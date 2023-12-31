/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function busyWait(milliseconds) {
    const start = Date.now();
    while (true) {
      if (Date.now() - start >= milliseconds) {
        return;
      }
    }
  }
  
  // Example usage:
  const duration = 3000; // 3 seconds
  console.log("Busy waiting for 3 seconds...");
  busyWait(duration);
  console.log("Finished busy waiting!");


// function sleep (seconds) {

// }