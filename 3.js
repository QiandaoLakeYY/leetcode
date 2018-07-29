var lengthOfLongestSubstring = function(s) {
    let res = 0
    let str = ''
    for (let i = 0, len = s.length; i < len; i++) {
        let char = s[i]
        let index = str.indexOf(char)
        if (index === -1) {
            str += char
            res = res < str.length
                  ? str.length
                  : res
        } else {
            str = str.substr(index + 1) + char
        }
    }
    return res
};


console.log(lengthOfLongestSubstring('bbbb'))