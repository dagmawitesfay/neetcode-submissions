class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
//PREP
// PARAMETERS-> arrays of heights
// Return is the maximum area (the water can hold)
//  EXAMPLE -> [1,7,2,5,4,7,3,6]
// OUTPUT -> 36 (max)
// PSUEDOCODE
// Create am empty variable for the product 
// then we define the left and right pointers
// while the left pointer is less than the right
// caclulate the ptroduct and 
    maxArea(heights) {
        let product = 0 
        let left = 0 , right = heights.length-1
        while(left<right){
            let area = Math.min(heights[left],heights[right]) * (right-left)
            product = Math.max(product,area)
            if(heights[left] < heights[right]){
                left++
            }
            else{
                right--
            }
        }
        return product
    }
}
