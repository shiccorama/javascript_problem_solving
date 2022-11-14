// this solution is incomplete ::

function largestOfFour(arr) {
	let newArr = [];
  let len = arr.length; 
  let num = temp = 0;
  // [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]
  for(let i=0; i<len; i++){
    for(let j=0; j<len-1; j++){
		num = 0;
      if(arr[i][j] >= arr[i][j+1]){
        temp = arr[i][j];
      }else{
        temp = arr[i][j+1];
      }
      console.log(temp);
      if(temp > 0 && temp > num){
        num = temp;
      }else if(temp > 0 && temp <= num){
        num;
      }else if(temp <= 0 && temp > num){
        num = temp;
      }else if(temp <= 0 && temp <= num){
        num;
      }

      console.log("num" + num);
    }
    newArr.push(num);
  }
  
  console.log(newArr);
	return newArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

//____ the above solution is incomplete, check the right solutions down there : 

// procedural solution :

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

// declarative approach :

function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}


//declarative approach :

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}


//recursive approach :

function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}


// my solution after revision of loop length and assign variables in place :

function largestOfFour(arr) {
	let newArr = [];
  let len = arr.length; 
  let num = temp = 0;
  // [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]
  for(let i=0; i<len; i++){
    num = arr[i][0];
    for(let j=1; j<arr[i].length; j++){
      if(arr[i][j] >= num){
        num = arr[i][j];
      }
    }
    console.log("num" + num);
    newArr.push(num);
  }
  console.log(newArr);
	return newArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
