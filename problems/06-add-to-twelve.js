/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false
***********************************************************************/
// for(let i = 0; i < arr.length; i++) {

//   if(arr[i + 1] + arr[i] === 12) {
//     return true;
//   }
// }


// return false;

function addToTwelve(arr) {
  // Your code here

  if(arr[0] + arr[1] === 12) { // base case of sum of 2 adjacent nums = 12;
    return true;
  }

  if(arr.length === 0) { // another base case to return false on empty arrays
    return false;
  }

  return addToTwelve(arr.slice(1)) //takes sliced copy of arr at index of 1, and passes it into the function to check with first base case;



}




console.log(addToTwelve([1, 3, 4, 7, 5])); // true
//console.log(addToTwelve([1, 3, 4, 7, 6])); // false
//console.log(addToTwelve([1, 11, 4, 7, 6])); // true
//console.log(addToTwelve([1, 12, 4, 7, 6])); // false
//console.log(addToTwelve([1])); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
