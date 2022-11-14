// this is to check if all alphabet letters in the sentence or not:



var checkIfPangram = function(sentence) {
    
    
    
let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let string = "thequickBrownfoXjumpSoverthelazydog";
let lowerCase = sentence.toLowerCase();
// console.log(lowerCase);
let arr = lowerCase.split("");
// console.log(arr);
let filtered = arr.filter((item,index) => arr.indexOf(item) === index);
// console.log(filtered);
let sorted = filtered.sort();
// console.log(sorted);
let joined = sorted.join("");
// console.log(joined);
if(alphabet === joined){
  // console.log("true");
  return true;
}else{
  // console.log("false");
  return false;
}
   
    
    
    
};