class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
// PREP
// P -> ARRAY OF STRINGS
// R-> nested array of strings
// E-> anagram strings that contains same characte length
//   INput-> ["act","pots","tops","cat","stop","hat"]
 // output - > [["act,"cat"],["hat"], ["tops","stop","pots"]]
 // Edge cases : what happens if the array is empty ??
 // what if the users data has data type thats not string??
 // Base case -> if the array length of one just return the nested array of that input
 // Bound -> input's length is between 1 and 10,000
    // -> the length of each elements in the array is between 0 and 100

// PSUEDOCODE
// use nested for loops to get all the possible checks
// then check if the element's length from the loop is the same as the elements' length from the second loop 
// second condition is a way to check if they have the same character
// sort the elements and then use the == operator 
// time complexity -> O(n^2)
    groupAnagrams(strs) {
        

    // using Sorting and hashMap
    // hashMap holds key values where the keys are the sorted string and the values are the list of strings that belongs to the anagram
    // sort the characters and append the orignal string to the list corresponding to that specific key
    // after that just return the values beause we need the grouped anagram

    const anagramRes = {} 
    for(const str of strs){
        const sortedString = str.split("").sort().join("") // serves as the key 
    // check if the key exits if not create an empty array for it 
    if(!anagramRes[sortedString]){
        anagramRes[sortedString] = []  // create the array and then push it  {aet:["eat"]}
    }
       anagramRes[sortedString].push(str) // push the origninal string fpr that key(sorted string)
    }
    return Object.values(anagramRes) // just get the original strings and now this holds the anagram 
    }
}
