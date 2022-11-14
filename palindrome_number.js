
var isPalindrome = function(x) {
     if(x<0){
        console.log(1);
        return false;
     }else if((x>=0 && x<=9)){
        console.log(2);
        return true;
     };


    let num = x;
    let arr = [];
    while(num >= 1)
    {
        let mod = Math.floor((num % 10));
        arr.push(mod);
        num = num / 10;
    }
    console.log(arr);
    const reverse = parseInt(arr.join(""));
    console.log(reverse);

    if(x === reverse){
      console.log(x);
      console.log(reverse);
      console.log("true");
      return true;
    }else if (x !== reverse){
      console.log(x);
      console.log(reverse);
      console.log("false");
      return false;
    }
    
 };