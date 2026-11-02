class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // PREP
    // PARAMETERS ARE THE ARRAY AND FREQURENCY , K 
    // RETURN IS THE MOST FREQURENT ELEMENTS ->ARRAY BASED ON K 
    // EXAMPLE - >INPUT [1,2,2,3,3,3], k = 2 -> output-> [2,3]
    // PSUDOCODE- > 
    // [1,2,2,3,3,3] - > {1:1 , 2:2 , 3:3}
    // create hasmap 
    // loop through the arrays
    // create occurrence for each values in the array
    // 

    // return the values with only k items (slice??)
    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const arr = Object.entries(count).map(([num, freq]) => [
            freq,
            parseInt(num),
        ]);
        arr.sort((a, b) => b[0] - a[0]);
        return arr.slice(0,k).map((pair)=>pair[1])
    }
}