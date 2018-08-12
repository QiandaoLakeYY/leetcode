var bulbSwitch = function(n) {
	if (n === 1) {
		return n
	}
	if (n === 2) {
		return 1
	}
    let leftNum = n % 3
    let havaNum = parseInt( n / 3 )
    console.log('leftNum ---- >' + leftNum)
    console.log('haveNum ----- >' + havaNum)
    if (leftNum === 0) {
    	return havaNum
    } else if (leftNum === 1){
    	if (n % 2 === 0) {
    		return havaNum + 1
    	} else {
    		return havaNum
    	}
    } else {
    	return havaNum + 1
    }
};

bulbSwitch (7)