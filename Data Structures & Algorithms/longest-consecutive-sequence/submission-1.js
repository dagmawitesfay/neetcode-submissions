class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
// PREP
// PARAMETER -> NUMS ARRAY
// RETURN IS THE LONGEST CONSECUTIVE LENGTH
// EXAMPLE -> INPUT [2,20,4,10,3,4,5] -> [2,3,4,5] => 4 
// PSUEDOCODE
// CREATE A SET FROM THE NUMS ARRAY( REMOVE COUNTINMG OF SAME SEQUENCE)
// INITALIZE THE LONGEST-COUNT/LENGHT TO BE ZERO
// ITERATE THROUGH THE ARRAYS 
// THE LOGIC TO CACULATE THE START OF THE SEQUENCE IS CHECK WHETHER THE NUMS[I]/ THE number in the array has  negibour (nums[i]-1) (use has to check that)
// if so that number isnt found then its the start of the sequence 
// update the length
    longestConsecutive(nums) {
    const newSet = new Set(nums)
    let longestConsecutive = 0 // track the longest sequence 

    for(const num of newSet){
        if(!newSet.has(num-1)){
           let length =  1 
           
           // keep adding / increasing the length while the element + length exist (this basically sequence count)
           while(newSet.has(num+length)){
            length++
           }
           longestConsecutive = Math.max(longestConsecutive,length)
        }
    }

    return longestConsecutive

    }
}
