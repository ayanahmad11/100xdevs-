/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isalnum(input) {
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    if (!(char >= 'a' && char <= 'z') &&
        !(char >= 'A' && char <= 'Z') &&
        !(char >= '0' && char <= '9')) {
      return false;
    }
  }
  return true;
}
function isPalindrome(str) {
  let i=0,j=str.length-1;
  while(i<=j){
    if(!isalnum(str[i])){i++; continue;}
    if(!isalnum(str[j])){j--;continue;}
    if(str[i].toLowerCase()!=str[j].toLowerCase())
      return false;
    else {
      i++;j--;
    }  
  }
  return true;
  
}
// console.log(isPalindrome("race a car"))
module.exports = isPalindrome;

// Note
//The provided isPalindrome function doesn't explicitly handle spaces 
// within the string. It treats spaces as non-alphanumeric characters due 
// to the implementation of the isalnum helper function.
