class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
//PREP
// PARAMETER -> given array of nums 
// RETURN -> it should return triplet where nums[i]  + nums[j]+ nums[k] == 0 
// where i , j , k are indicies 
// pseudocode
//  create empty array that holds the result
// sort the nums so that we can easily deal /skip duplicates and also to make sure both left and right pointers increase / decrease our sum 
// fix one of the three variables and for the other two use two Pointers
// loop through nums and intalize our first a 
// while the left and right arent equal
// 
    threeSum(nums) {
       const result = []
        nums.sort((a,b)=>a-b)

        for(let i=0;i<nums.length;i++){

            if(nums[i]===nums[i-1]) continue // duplicate skip 

            let left = i+1 , right = nums.length-1
                
                // two pointer pattern
                while(left<right){
                    const sum = nums[i]  + nums[left] + nums[right]
                    if(sum>0){
                        right--
                    }
                    else if(sum<0){
                        left++
                    }
                    else{
                        result.push([nums[i],nums[left],nums[right]])
                        left++
                        right--

                        // 
                        while(left<right && nums[left]===nums[left-1]){
                            left++
                        }
                    }
                }
            
                    }
                    return result 
}
}
