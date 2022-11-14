function sliceInsertCombine(arr1, arr2, n) {
  let str,i;
  let newArr = result = [];
  str = arr2.slice(0,n) + "," + arr1 + "," + arr2.slice(n);
  // str.replace(",","");
  // console.log(str);
  // console.log(typeof str);
  
  newArr = Array.from(str);
  console.log(newArr);
  
  for(i=0; i<newArr.length; i++){
    if(newArr[i] !== ","){
      result.push(newArr[i]);
    }
  }

  console.log(result);
  console.log(arr1);
  console.log(arr2);
}


sliceInsertCombine(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);