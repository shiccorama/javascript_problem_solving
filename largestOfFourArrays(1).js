function largestOfFour(arr) {
	let len = arr.length; 
	let newArr = [];
  let temp;
  let num = 0;

// [[-72, -3, -17, -10],[-72, 3, -17, -10]]
	for(let i=0; i<len; i++){
    console.log("FIRST " + num);
    if(num < 0){
      temp = num;
    }else{
      num = 0;
    }
    console.log("__ " + num);
    
		for(let j=0; j<len-1; j++){
      let negative = arr[i][j]; 
      if(arr[i][j] >= arr[i][j+1]){
			  temp = arr[i][j];
			}else{
				temp = arr[i][j+1];
			}

			if(temp<0){
        if(temp<negative){
          num = negative;
        }else if(temp>=negative){
          num = temp;
        }
			}else{
        if(temp>=num){
       	  num = temp;
        }else{
          num;
        }
      }

      console.log("final  "+num);

		}
    newArr.push(num);
	}

    console.log(newArr);
	  return newArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);