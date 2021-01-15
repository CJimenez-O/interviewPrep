 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// ARRAYS ////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////




 ///////////////// 2 SUM //////////////////////
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


//console.log(twoSum(nums,target))


/////////////////////// VALID SUBSEQUENCE //////////////////
function ValidSubsequence(array, seq) {
    // starting index
	let arrIdx = 0;
	let seqIdx = 0;
	while(arrIdx < array.length && seqIdx < seq.length){
        //compare array and sequence
		if(array[arrIdx] === seq[seqIdx]){
			seqIdx++;
        }
        //regardless of if statement 0 1 move on
		arrIdx++;	
    }
    
	return seqIdx === seq.length;    
  }
  
  var arr = [1,1,1,1,1,1];
  var seq = [1,1,1,1];
  
  //console.log(ValidSubsequence(arr, seq));


/////////////////////// 3 SUM ///////////////////////////
function threeNumberSum(array, targetSum) {
    
    //sort array smallest to biggest
      array.sort((a,b) => a - b);
      var trip = [];
      
      // length -2 is so the array never overlaps
      for ( var i = 0; i < array.length - 2; i++ ){
          //left for left to right of array ->
          let left = i + 1;
          // right goes right to left in array <-
          let right = array.length - 1;
          while ( left < right){
              const currSum = array[i] + array[left] + array[right];
              console.log(`${array[left]} + ${array[i]} + ${array[right]}`)
              // if they match add to triplets array and move var up and down array.
              if (currSum === targetSum){
                  console.log(`MATCH : ${array[left]} + ${array[i]} + ${array[right]}`)
                      trip.push([array[i],array[left],array[right]]);
                      left++;
                      right--;
              }else if(currSum < targetSum){
                  left++
              }else if(currSum > targetSum){
                  right--
              } 
          }
      }
      return trip;
  }
  var arr = [12,3,1,2,-6,5,-8,6];
  var tgt = 0;
  //console.log(threeNumberSum(arr, tgt));