class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */ 
    // return triplet where the sum equals the target
    // no duplicate
    // fix one number
    // the rest is two sum (two pointers)
    threeSum(nums) {
        const result = []
        
          nums.sort((a,b)=>a-b) // ascending order
        for(let i=0;i<nums.length;i++){
           if(nums[i]===nums[i-1]) continue // skips duplicate
              let left = i+1 , right = nums.length-1 
              // two pointer 
            while(left<right){
            const sum = nums[i]  + nums[left] + nums[right]
            if(sum< 0){
            left++
            }
            else if(sum > 0){
               right-- 
            }
            else{
                result.push([nums[i], nums[left] , nums[right]])
                left++
                right--
            

            while(left<right &&nums[left]===nums[left-1] ){
                left++
            }
            }
            }
        }
        return result
    }
}
