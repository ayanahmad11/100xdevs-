// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// My code
// function print(){
//     console.clear();
//     console.log(new Date().getHours()-12 + ":"+new Date().getMinutes()+":"+new Date().getSeconds());
// }
// setInterval(print,1000)

function updateClock() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
  
    // Pad single digit values with leading zeros
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
  
    const time12hrFormat = `${hours % 12 || 12}:${minutes}:${seconds} ${hours < 12 ? 'AM' : 'PM'}`;
    const time24hrFormat = `${hours}:${minutes}:${seconds}`;
  
    // Update 2-counter.md with the time
    const formattedTime = `${time24hrFormat} | ${time12hrFormat}`;
    // Your code to update the file content with the formatted time
    // (This will depend on your specific method to update the file content)
  
    console.log(formattedTime); // For demonstration purpose, log the time to console
  }
  
  // Update the clock initially and then every second
  updateClock();
  setInterval(updateClock, 1000);