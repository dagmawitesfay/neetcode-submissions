class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // PREP
    // PARAMETERS ARE THE NUMBERS ARRAY AND TARGET
    // return the indicies where the two numbers sum up equals the target
    // Example -> numbers=[2, 7, 11, 15]
    // target=9
    // 2+7 = 9 should return [1,2] (note that the indices are starting from 1 not 0)
    // PSuedocode
    // usimg two pointers
    // why because they have 0(n) worst case 
    // while the bruteforce way is o(n^2)
    // create a two variables for left and right pointers and initalize the left to be the first element in the array and right to be the last element in the array
    // while left is less than right
    //  compute the sum of the left and the right
    // if the sum is greater than the target
    // shift/ decremenr the sium by making right--
    // else if shift the left by 1 as the sum has to be increased
    // final else that returns the indices 
    twoSum(numbers, target) {
//   for (let i = 0; i <numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i+1, j+1]
//       }
//     }
//   }

    let left = 0 , right = numbers.length-1
    while(left<right){
        let currentSum = numbers[left] + numbers[right]
        if(currentSum>target){
            right--
        }
        else if(currentSum<target){
            left++
        }
        else{
            return [left+1,right+1]
        }
    }
}
    }
