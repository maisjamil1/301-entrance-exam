// Write a function named 'greaterThan' that will take an array of numbers and a number as parameters then return the number of numbers that are greater than that number in the array

// example_1: greaterThan([4,2,3,1],3) => 1
// example_2: greaterThan([2,8,-1],8) => 0
'use strict'
var count$ = 0;
var arr1=[4,2,3,1,7];
var no$1=3;
function greaterThan(arr1, no$1) {
  for (var i = 0; i < arr1.length; i++) {
    if (no$1 > arr1[i]) {
      count$++;
    }
  }
  return(count$); 
}
console.log(greaterThan(arr1,no$1));


