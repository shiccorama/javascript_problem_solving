
let x;
let y = [7, false, null, 0, ""];

for(x=0; x<y.length; x++){
    console.log(y[x]);
  console.log(isNaN(y[x])); 
  console.log("_______");
}


let i = ["ate",NaN, undefined];

for(x=0; x<i.length; x++){
    console.log(i[x]);
   console.log(isNaN(i[x])); 
//   console.log(typeof NaN);
}


_______________________________________________

function bouncer(arr) {
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    // if(arr[i] === NaN){
    //   continue;
    // }
    switch(arr[i]){
      case false:
      case 0:
      case null:
      case undefined:
      case "":
      case :
        continue;
      default:
        newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

bouncer([null, NaN, 1, 2, undefined]);
// bouncer([false, null, 0, NaN, undefined, ""]);
// bouncer([7, "ate", "", false, 9]);
// bouncer(["a", "b", "c"]);