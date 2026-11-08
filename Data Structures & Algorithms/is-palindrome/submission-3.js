class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const originalString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
        const reversed = originalString.split("").reverse().join("")

        return originalString==reversed
    }
}
