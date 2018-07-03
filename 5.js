//给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。

var isPalindrome = function (s) {
    var sLen = s.length
    if (sLen === 1) return true
    var isPalindromeFlag = true
    for (let i = 0; i < sLen; i++) {
        if (s[i] !== s[sLen-1-i]) {
            isPalindromeFlag = false
            break
        }
    }
    return isPalindromeFlag
}
var longestPalindrome = function(s) {
    var sLEN = s.length
    var subStr = ''
    var resArr = ''
    for (let i = 0; i < sLEN; i++) {
        for (var len = sLEN-i; len > 0; len--) {
            subStr = s.substr(i, len)
            if (isPalindrome(subStr)) {
                if (subStr.length > resArr.length) {
                    resArr = subStr
                    break
                }
            }
        }
    }
    return resArr
};

var ans = longestPalindrome('ababa')