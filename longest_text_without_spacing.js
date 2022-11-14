const solution = (message, k) => {
  let newMessage = '';
  let newArr = [];
  let tempArr = [];

  arr = message.split("");
  let len = arr.length;

  if(k >= len){
    return message;
  }else{
    let j = len - k;
      if( arr[k] == ' '){
        newArr = arr.slice(0,k);
        newMessage = newArr.join("");
        return newMessage;
      }else{
        tempArr = arr.slice(0,k);
        let x = tempArr.length;
        for(let i=x; i>=0; i--){
          if(tempArr[i] == " "){
            newArr = tempArr.slice(0,i);
            newMessage = newArr.join("");
            break
          }
          return newMessage;
        }
      }
  
  }
}

console.log(solution("the quick brown fox jumps over the lazy black dog", 39));