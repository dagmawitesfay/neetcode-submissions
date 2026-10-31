class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
//PREP
// PARAMETER (ACEEPST ARRAY OF NUMBERS)
// RETURN  // RETURNS A BOOLEAN (TRUE / FALSE)
// EXAMPLE // [1,2,3,3] SHOULD RETUTN FALSE AS 3 APPREARS TWICE
// PSUEDOCODE
// there are three ways of doing it
// first one is the bruteforce way by looping through each elements in the array and check if the element is equal to the nxt element
// time compexity is  the loop has O(n) and we do this process n times so the complexity will be O(n^2)
    hasDuplicate(nums) {

        // BRUTE FORCE WAY
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//         // checking condition
//         if(nums[i]==nums[j]){
//             return true // duplicate exist and stop immediately
//         }
     
//     }
//     }
//        return false
// }
    
        // SECOND WAY
    // second way of doing it is sorting
    // sort has logn compexlity and doing each n times gives nlogn
    // let sortedVal = nums.sort((a,b)=>a-b)
    // // loop through the sorted array
    // for(let i=1;i<=sortedVal.length;i++){
    //     if(sortedVal[i]==sortedVal[i-1]){
    //         return true
    //     }
    // }
    // return false

        // THIRD WAY 
       // we can have a better way of fiding duplicates using Set 
    // create a new set / intalize 
    // add elemnts to the set
    // check if the element has seen in the set
    // if so return true as it is duplicate
    // otherwiswe return true ->no duplicate
    const seen = new Set()
    for(let i=0;i<nums.length;i++){
    if(seen.has(nums[i])){
        return true
    }
    // add the number to the seen list
    seen.add(nums[i])
    }
    return false 

    }


 

}