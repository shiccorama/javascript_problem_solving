function confirmEnding(str, target) {

  let	str_arr = str.split("");
  let	target_arr = target.split("");

  let len_str = str_arr.length;
  let len_target = target_arr.length;
  let diff = len_str - len_target;
  console.log(diff);

    for(let i=0; i<diff; i++){
      str_arr.shift();
    }
    console.log(str_arr);
    console.log(target_arr);

    if(JSON.stringify(str_arr) === JSON.stringify(target_arr)){
      console.log("T");
      return true;
    }else{
      console.log("F");
      return false;
    }

}

confirmEnding("mohaoomed", "med");

//_____________________________ slice solution __________

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
  /* slice function has start and end index, if you write only
  one, this means the start, so, slice(4-1) >> slice(3) and index 3
  is the letter "d", comparing with target, it matches, so, it's true
  */

}

confirmEnding("card", "d");

// ______________ regular expression ___________

function confirmEnding(str, target) {

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));

/* 
We need to make a pattern from the target variable that exists at the end of the string str.
Since we will use a variable that will change the pattern each time the function is called, we will use the constructor of the regular expression object new RegExp(pattern[, flags]), so we start with: new RegExp(target).
Then we have to check at the end of the string, so we concatenate to the target variable the $ character to match the end: new RegExp(target+'$').
We use the flag i to ignore the case of the pattern and we have our completed RegExp: new RegExp(target+'$','i'), or we can ommit the flag entirely.
Finally, we are using our regular expression with the test method to the given string, to check if the string ends with the pattern and return true or false accordingly.
*/

//________ using slice backward (from right to left) __________

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");

//If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.
