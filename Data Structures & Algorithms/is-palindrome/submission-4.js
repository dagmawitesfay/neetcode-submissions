class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // PREP
    // PARAMETER IS BASICALLY THE STRING WE WANT TO CHECK IF ITS PALINDROM
    // RETURN IS BOOLEAN TRUE IF ITS PALINDROME AND FALSE IF NOT
    // EXAMPLE -> s = "tab a cat" -> tabacat and backward of this string isnt the same tacabat // not palindrome
    // psuedocode
    // define left and right pointer variables and set the left to 0 as its the beginning of the string and set the right to be the last character of the string
    // clean the string to remove anything that isnt digit and alphabet
    // while the left is less than the right  increment the left by 1 and decrement the right by 1
    // if they arent equal return true immediately as its not palindrome
    isPalindrome(s) {
        // const originalString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
        // const reversed = originalString.split("").reverse().join("")

        // return originalString==reversed

        let left = 0 
        let right = s.length-1
        while(left<right){
        while(left<right && !s[left].replace(/[^a-zA-z0-9]/g , "")){
            left++
    }
       while(right>left && !s[right].replace(/[^a-zA-z0-9]/g , "")){
            right--
    }
    if(s[left].toLowerCase()!=s[right].toLowerCase()){
        return false
    }
    left++
    right--
        }
    return true
}
}
