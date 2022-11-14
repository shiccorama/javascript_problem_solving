function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}


_________________________________________


function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}



_________________________________________________
//my solution :

function reverseString(str) {
  let arr = str.split("");
  // console.log(arr);
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    newArr.unshift(arr[i]);
  }
  // console.log(newArr);
  str = newArr.join("");
  console.log(str);
  return str;
}

reverseString("hello");