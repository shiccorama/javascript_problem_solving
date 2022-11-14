check if element is in the array or not by 3 different solutions....




function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));


______

function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));




__________

function quickCheck(arr, elem) {
  return arr.indexOf(elem) != -1;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

__________

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i=0; i<arr.length; i++){
      if(((arr[i]).indexOf(elem)) === -1){
              newArr.push(arr[i]);
      }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 26));