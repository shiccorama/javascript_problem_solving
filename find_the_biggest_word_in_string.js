// my solution :
function findLongestWordLength(str) {
  let biggest = 1;
  let arr = str.split(" ");
  // console.log(arr);
  for (let i=0; i<arr.length; i++){
    if(arr[0].length <= arr[i].length){
      arr[0] = arr[i];
      }
      biggest = arr[0].length;
      // console.log(biggest);
    }
    console.log(biggest);
    return biggest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

________________________________________

// using reduce function :
function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(longest, word) {
      return Math.max(longest, word.length)
    }, 0);
}

________________________________________
// using map function :

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

________________________________________
// using recursion with Math.max() function :

function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

________________________________________

function findLongestWordLength(str) {
let longestLength = 0;
let currentLength = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    if (currentLength > longestLength) longestLength = currentLength;
    currentLength = 0;
  } else {
    currentLength++;
  }
}
if (currentLength > longestLength) {
  longestLength = currentLength;
}

return longestLength;
}

