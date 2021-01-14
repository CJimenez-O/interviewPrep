var nums = [3,2,4];
var target = 6;

var twoSum = function(nums, target) { 
    var result = [];
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if( nums[i] + nums[j] === target){
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};


console.log(twoSum(nums,target))
