var reverse = function (x) {
    let str = ''
    let flag = false
    let resStr = ''
    x = String(x)
    if (x[0] === '-') {
        flag = true
        str = x.substr(1)
        console.log(str)
    } else {
        str = x
    }
    if (flag) {
        let tempArr = str.split('').reverse()
        tempArr.unshift('-')
        resStr = tempArr.join('')
    } else {
        resStr = str.split('').reverse().join('')
    }
    let resNumber = parseInt(resStr)
    if(resNumber < -2147483648 || resNumber > 2147483647){
        return 0;
    }
    return resNumber
}
