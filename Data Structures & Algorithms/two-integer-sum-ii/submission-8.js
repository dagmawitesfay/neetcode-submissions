class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
// we are given array of numbers and target
// we have to retunr two indices that sum up to the target( the indices are 1 indexed instead of zero based index)
// numbers are sorted in ascending order
// we cant use the same numbers twice
// create two variables for left and right pointer
// intalize them to 0 and the last element of number array for right pointer
// while the left is less than right check if the sum of left and right is greater or equal to target and update the left and right pointer based on the result
// return the indicies
    twoSum(numbers, target) {
        let left= 0 , right = numbers.length-1
        while(left<right){
        if(numbers[left] + numbers[right]> target){
            right--
        }
        else if(numbers[left] + numbers[right] < target){
            left++
        }
        else{
            return [left+1,right+1]
        }
        }
        left++
        right--
    }
}
