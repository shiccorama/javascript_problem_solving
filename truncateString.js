// _________ my solution ___________


function truncateString(str, num) {
  let result = "";
  if(num >= str.length){
    result = str;
  }else{
    result = str.replace(str.slice(num),"...");
  }

  // console.log(str.length);
  // console.log(num);
  
  
  console.log(result);
  return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);

//__________ ternary operator with slice function _____

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}



