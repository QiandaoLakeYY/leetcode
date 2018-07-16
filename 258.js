function sum (numString) {
    let num = 0
    for (let i = 0, len = numString.length; i < len; i++) {
        num += parseInt(numString[i])
    }
    return num
}

var addDigits = function(num) {
  let tempNum = num
  while(tempNum >= 10) {
      tempNum = sum(String(tempNum))
      addDigits(tempNum)
  }
  return tempNum  
};
