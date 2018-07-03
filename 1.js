//给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
//你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

var twoSum = function (nums, target) {
    let resArr = []
    for (let i = 0, len = nums.length; i < len; i++) {
        for (let j = i + 1, LEN = nums.length; j < LEN; j++) {
            if (nums[i] + nums[j] === target) {
                resArr.push(i, j)
                return resArr
                
            }
        }
    }
}

var ans = twoSum([3, 2, 4], 6)
console.log(ans)