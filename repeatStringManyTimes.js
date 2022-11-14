function repeatStringNumTimes(str, num) {
  let result = "";
  
  if(num <= 0){
    return result;
  }else{
    for(let i=0; i<num; i++){
      result = result.concat(str);
    }
  }
  console.log(result);
  return result;
}

repeatStringNumTimes("abc", 3);

//_____________________ same solution of me but without concat() ______

function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}

// _______ recursion solution _______

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

// ______ using ternary operator with recursion ________

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

