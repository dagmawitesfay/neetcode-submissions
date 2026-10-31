class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

// PREP
// PARAMETER -> takes two strings
// RETURN -> Boolean ( True/ false)
// EXAMPLE - > s = "jar", t = "jam" -> returns false as they dont have the same number characeter
// PSUEDOCODE
// FIRST THING IS TO CHECK IF THEY HAVE THE SAME LENGTH
// IF NOT THE SAME LENGTH SHORT CIRUIT AND RETURN FALSE
// IF NOT SORT BOTH S AND -> WORKS WITH ARRAY SO USE SPLIT OR ARRAY.FROM
// USE STRING COMPARISION USING LOCALECOMPARE

    isAnagram(s, t) {
//         if(s.length!==t.length) return false 
//         const firstWord = s.split("").sort((a,b)=>a.localeCompare(b)).join("")
//         const secondWord = t.split("").sort((a,b)=>a.localeCompare(b)).join("")

// return firstWord===secondWord
    //  second method 
    // use hashmap
    // check the length of s and t first to make sure they have the same length
    // if so continue and create two Maps for cteating key value pairs 
    // comapre the two maps and return true if they are equal 
       if(s.length!==t.length) return false 

        // create hashMap
         const countS  =  {}
        const countT  = {}

        for(let i=0;i<s.length;i++){
            
        // assign it to zero if the element didnt occur before if so add one to current value
        // Count occurence 
         countS[s[i]] = (countS[s[i]] || 0) + 1 // get the key and give it a default value of zero
         countT[t[i]] = (countT[t[i]] || 0) + 1
        }

         // iterate through and check if they have the same key
         for (const key in countS){
            if(countS[key]!==countT[key]){
                return false
            }
         }
       return true

    }
}
