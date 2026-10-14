class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // check if they have same number of length
        if(s.length!==t.length) return false
        const str = s.split("").sort((a,b)=>a.localeCompare(b)).join("")
         const str_second = t.split("").sort((a,b)=>a.localeCompare(b)).join("")

         // compare the strings
         return str===str_second

    }
}
