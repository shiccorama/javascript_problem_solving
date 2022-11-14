function findElement(arr, func) {
  let x = undefined;
  for(let i=0; i<arr.length; i++){
    // console.log(func(arr[i]));
    if(func(arr[i])){
      // console.log(arr[i]);
      x = arr[i];
      console.log(x);
      break;
    }else{
      continue;
    }
  }
    console.log("__" + x);
    return x;
}

findElement([1, 3, 4, 7, 9, 11], num => num % 2 === 0);

// ______________ another solution ____________

function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

// _____________ using find() -- Array.prototype.find function _______

function findElement(arr, func) {
  return arr.find(func);
}

// _____________ using map() and indexOf() function _______

function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

// ________________ recursion ____________

function findElement(arr, func) {
  if (arr.length > 0 && !func(arr[0])) {
    return findElement(arr.slice(1), func);
  } else {
    return arr[0];
  }
}