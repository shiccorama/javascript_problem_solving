var twoSum = function(nums, target) {
    let first,second,result;
    let x,y,tempArr,newArr;

    if(nums.length === 2){
        console.log(nums.length);
        result=[0,1];
        console.log(result);
        return result;
    }else{
        for(let i=0; i<nums.length; i++){
            x = nums[i];
            console.log(x);
            for(let j=i+1; j<nums.length; j++){
                if((x + nums[j]) === target){
                    first = i;
                    second = j;
                    console.log(i,j);
                    result=[first,second];
                    // console.log(result);
                    return result;
                }
                // 
            }
        }
    }
};

// nums = [2,4,5,6,3,7];
// newArr = [2,3,4,5,6,7];

twoSum([2,5,5,11],10);
