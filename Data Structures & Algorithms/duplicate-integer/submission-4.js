class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return nums.some((num,index)=>nums.indexOf(num)!==index)       
    }
}
