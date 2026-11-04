class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

// prep
// parameter -> accepts array of numbers
// return is a new array where the result is the product of all numbers of num(array) expect nums[i]
// Exampl -> nums = [1,2,4,6]
// Output -> arr[0] = arr[1] * arr[2] * arr[3] => [48,24,12,8]
// psuedocode
// create a new array which holds the result of all product []
// loop through each numbers and for each products = arr[i] = arr[i+1] * arr[arr.length-1]
// push the products to the new array 
// return the array
    productExceptSelf(nums) {
    //     const transformedArray = []
    //     let products = 1 ; 
    //     for(let i=0;i<nums.length;i++){
    //         const newArray = nums.filter((_,j)=>i!==j)
    //          // reduce for each new created array which is different everytime the loops iterate as it removes the current element and get everyhting excpet that element in the new array
    // const result  = newArray.reduce((acc,current)=>acc*current,products)
    //          // push the result to the transformedArray
    //          transformedArray.push(result)
    //     }
    // return transformedArray
    // return the transformedArray

    // better solution with O(n)
    //create new array to hold the result of product of prefix and postfix
    // use two loops first that holds product of the prefix
    // the other loop hold product of prefix with the post
      const n = nums.length;
  let res = new Array(n).fill(1);
  for (let i=1; i<n; i++) res[i] = res[i-1] * nums[i-1];
  let postfix = 1;
  for (let i=n-1; i>=0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res;
}
}