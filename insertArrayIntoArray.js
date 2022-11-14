function frankenSplice(arr1, arr2, n) {
  let arr = [];
  if(arr2.length === 0){
   arr = [...arr1];
  }else{
    arr = [...arr2];
    for(let i=n; i<arr.length; i++){
        for(let j=arr1.length-1; j>=0; j--){
          arr.splice(n, 0, arr1[j]);
        }
        break;
    }
  }
    console.log(arr);
    console.log(arr1);
    console.log(arr2);
  
  return arr;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)

// __________ another solutions : by using n++ ______ 
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    console.log("i=" + i );
    localArray.splice(n, 0, arr1[i]);
    n++;
    console.log("n=" + n );
  }
  return localArray;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)

// ___________ very smart solution made by spread operator _________

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

// _________ using spread and slice only _______

function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}


